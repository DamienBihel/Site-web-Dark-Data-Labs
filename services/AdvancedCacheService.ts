interface CacheConfig {
  name: string;
  version: number;
  maxAge: number; // en secondes
  maxItems?: number;
  patterns?: string[];
}

interface CacheEntry<T> {
  value: T;
  timestamp: number;
  expires: number;
}

export class AdvancedCacheService {
  private caches: Map<string, Cache> = new Map();
  private memoryCache: Map<string, CacheEntry<any>> = new Map();
  private configs: Map<string, CacheConfig> = new Map();

  constructor() {
    this.initializeCaches();
    this.setupPeriodicCleanup();
  }

  // Initialisation des caches
  private async initializeCaches(): Promise<void> {
    if (!('caches' in window)) {
      console.warn('Cache API not supported');
      return;
    }

    try {
      const cacheNames = await caches.keys();
      for (const name of cacheNames) {
        const cache = await caches.open(name);
        this.caches.set(name, cache);
      }
    } catch (error) {
      console.error('Error initializing caches:', error);
    }
  }

  // Configuration d'un nouveau cache
  async configureCacheStore(config: CacheConfig): Promise<void> {
    this.configs.set(config.name, config);

    if ('caches' in window) {
      try {
        const cache = await caches.open(`${config.name}-v${config.version}`);
        this.caches.set(config.name, cache);
      } catch (error) {
        console.error(`Error configuring cache ${config.name}:`, error);
      }
    }
  }

  // Mise en cache d'une ressource
  async cacheResource(
    cacheName: string,
    resource: Request | string,
    response?: Response
  ): Promise<void> {
    const config = this.configs.get(cacheName);
    if (!config) {
      throw new Error(`Cache ${cacheName} not configured`);
    }

    try {
      // Cache en mémoire pour les petites ressources
      if (response && response.clone().body) {
        const blob = await response.clone().blob();
        if (blob.size < 100 * 1024) { // < 100KB
          this.setMemoryCache(cacheName, resource.toString(), await response.clone().json());
        }
      }

      // Cache persistant
      if ('caches' in window) {
        const cache = this.caches.get(cacheName);
        if (cache) {
          if (response) {
            await cache.put(resource, response.clone());
          } else {
            await cache.add(resource);
          }
        }
      }
    } catch (error) {
      console.error(`Error caching resource in ${cacheName}:`, error);
    }
  }

  // Récupération d'une ressource mise en cache
  async getCachedResource(
    cacheName: string,
    resource: Request | string
  ): Promise<Response | undefined> {
    // Vérifier d'abord le cache en mémoire
    const memoryResult = this.getMemoryCache(cacheName, resource.toString());
    if (memoryResult) {
      return new Response(JSON.stringify(memoryResult), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Puis vérifier le cache persistant
    if ('caches' in window) {
      const cache = this.caches.get(cacheName);
      if (cache) {
        try {
          const response = await cache.match(resource);
          if (response) {
            // Mettre en cache mémoire si la ressource est petite
            const clone = response.clone();
            const blob = await clone.blob();
            if (blob.size < 100 * 1024) {
              this.setMemoryCache(cacheName, resource.toString(), await response.clone().json());
            }
            return response;
          }
        } catch (error) {
          console.error(`Error retrieving from cache ${cacheName}:`, error);
        }
      }
    }

    return undefined;
  }

  // Gestion du cache en mémoire
  private setMemoryCache<T>(
    cacheName: string,
    key: string,
    value: T
  ): void {
    const config = this.configs.get(cacheName);
    if (!config) return;

    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      expires: Date.now() + (config.maxAge * 1000)
    };

    this.memoryCache.set(`${cacheName}:${key}`, entry);
    this.enforceMemoryCacheLimit(cacheName);
  }

  private getMemoryCache<T>(cacheName: string, key: string): T | undefined {
    const entry = this.memoryCache.get(`${cacheName}:${key}`) as CacheEntry<T>;
    
    if (!entry) return undefined;
    
    if (Date.now() > entry.expires) {
      this.memoryCache.delete(`${cacheName}:${key}`);
      return undefined;
    }

    return entry.value;
  }

  // Nettoyage périodique des caches
  private setupPeriodicCleanup(): void {
    setInterval(() => this.cleanupCaches(), 60000); // Toutes les minutes
  }

  private async cleanupCaches(): Promise<void> {
    // Nettoyage du cache en mémoire
    for (const [key, entry] of this.memoryCache.entries()) {
      if (Date.now() > entry.expires) {
        this.memoryCache.delete(key);
      }
    }

    // Nettoyage des caches persistants
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        for (const name of cacheNames) {
          const [baseName, version] = name.split('-v');
          const config = this.configs.get(baseName);
          
          if (config && parseInt(version) < config.version) {
            await caches.delete(name);
          }
        }
      } catch (error) {
        console.error('Error cleaning up caches:', error);
      }
    }
  }

  // Limitation de la taille du cache en mémoire
  private enforceMemoryCacheLimit(cacheName: string): void {
    const config = this.configs.get(cacheName);
    if (!config || !config.maxItems) return;

    const cacheEntries = Array.from(this.memoryCache.entries())
      .filter(([key]) => key.startsWith(`${cacheName}:`))
      .sort((a, b) => b[1].timestamp - a[1].timestamp);

    if (cacheEntries.length > config.maxItems) {
      for (let i = config.maxItems; i < cacheEntries.length; i++) {
        this.memoryCache.delete(cacheEntries[i][0]);
      }
    }
  }

  // Préchargement des ressources
  async preloadResources(cacheName: string, resources: string[]): Promise<void> {
    const config = this.configs.get(cacheName);
    if (!config) return;

    const cache = this.caches.get(cacheName);
    if (!cache) return;

    try {
      await Promise.all(
        resources.map(async (resource) => {
          if (!(await cache.match(resource))) {
            await this.cacheResource(cacheName, resource);
          }
        })
      );
    } catch (error) {
      console.error(`Error preloading resources for ${cacheName}:`, error);
    }
  }

  // Invalidation du cache
  async invalidateCache(cacheName: string, pattern?: string): Promise<void> {
    if (pattern) {
      // Invalider les entrées correspondant au pattern
      const regex = new RegExp(pattern);
      
      // Cache en mémoire
      for (const [key] of this.memoryCache.entries()) {
        if (key.startsWith(`${cacheName}:`) && regex.test(key)) {
          this.memoryCache.delete(key);
        }
      }

      // Cache persistant
      if ('caches' in window) {
        const cache = this.caches.get(cacheName);
        if (cache) {
          const keys = await cache.keys();
          for (const key of keys) {
            if (regex.test(key.url)) {
              await cache.delete(key);
            }
          }
        }
      }
    } else {
      // Invalider tout le cache
      // Mémoire
      for (const [key] of this.memoryCache.entries()) {
        if (key.startsWith(`${cacheName}:`)) {
          this.memoryCache.delete(key);
        }
      }

      // Persistant
      if ('caches' in window) {
        await caches.delete(`${cacheName}-v${this.configs.get(cacheName)?.version}`);
      }
    }
  }
}

export const advancedCache = new AdvancedCacheService();

// Exemple d'utilisation :
/*
// Configuration des caches
await advancedCache.configureCacheStore({
  name: 'images',
  version: 1,
  maxAge: 86400, // 24 heures
  maxItems: 100,
  patterns: ['/images/*']
});

// Mise en cache d'une ressource
await advancedCache.cacheResource('images', '/images/hero.jpg');

// Récupération d'une ressource
const response = await advancedCache.getCachedResource('images', '/images/hero.jpg');

// Préchargement de ressources
await advancedCache.preloadResources('images', [
  '/images/hero.jpg',
  '/images/about.jpg'
]);

// Invalidation du cache
await advancedCache.invalidateCache('images', '/images/hero.*');
*/
