import { NetworkSpeedTest } from './NetworkSpeedTest';

interface ScriptConfig {
  src: string;
  type?: string;
  async?: boolean;
  defer?: boolean;
  priority?: 'critical' | 'high' | 'medium' | 'low';
  integrity?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
  sandbox?: string[];
}

interface AnalyticsConfig {
  provider: 'google-analytics' | 'plausible' | 'custom';
  id: string;
  options?: {
    anonymizeIp?: boolean;
    cookieless?: boolean;
    respectDNT?: boolean;
  };
}

export class ThirdPartyOptimizationService {
  private networkSpeed: NetworkSpeedTest;
  private loadedScripts: Set<string> = new Set();
  private deferredScripts: Map<string, ScriptConfig> = new Map();
  private analyticsInitialized: boolean = false;

  constructor() {
    this.networkSpeed = new NetworkSpeedTest();
    this.setupIntersectionObserver();
    this.setupNetworkObserver();
  }

  // Configuration des scripts tiers
  async configureScript(config: ScriptConfig): Promise<void> {
    const speed = await this.networkSpeed.measureSpeed();

    // Ajuster la configuration en fonction des conditions
    if (speed < 1) { // Connexion lente
      if (config.priority !== 'critical') {
        config.defer = true;
      }
    } else if (speed < 5) { // Connexion moyenne
      if (config.priority === 'low') {
        config.defer = true;
      }
    }

    // Scripts critiques chargés immédiatement
    if (config.priority === 'critical') {
      await this.loadScript(config);
    } else {
      this.deferredScripts.set(config.src, config);
    }
  }

  // Chargement d'un script
  private async loadScript(config: ScriptConfig): Promise<void> {
    if (this.loadedScripts.has(config.src)) {
      return;
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      
      script.src = config.src;
      script.type = config.type || 'text/javascript';
      
      if (config.async) script.async = true;
      if (config.defer) script.defer = true;
      if (config.integrity) script.integrity = config.integrity;
      if (config.crossOrigin) script.crossOrigin = config.crossOrigin;
      
      // Sandbox pour les scripts non fiables
      if (config.sandbox) {
        const iframe = document.createElement('iframe');
        iframe.sandbox.add(...config.sandbox);
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          iframeDoc.body.appendChild(script);
        }
      } else {
        document.head.appendChild(script);
      }

      script.onload = () => {
        this.loadedScripts.add(config.src);
        resolve();
      };
      script.onerror = reject;
    });
  }

  // Observation de l'intersection pour le chargement différé
  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const scriptSrc = entry.target.getAttribute('data-script');
            if (scriptSrc) {
              const config = this.deferredScripts.get(scriptSrc);
              if (config) {
                this.loadScript(config);
                this.deferredScripts.delete(scriptSrc);
                observer.unobserve(entry.target);
              }
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Créer des éléments observables pour les scripts différés
    this.deferredScripts.forEach((config, src) => {
      const element = document.createElement('div');
      element.setAttribute('data-script', src);
      element.style.height = '1px';
      element.style.width = '1px';
      element.style.position = 'absolute';
      element.style.opacity = '0';
      element.style.pointerEvents = 'none';
      document.body.appendChild(element);
      observer.observe(element);
    });
  }

  // Observation des changements de réseau
  private setupNetworkObserver(): void {
    if (!navigator.connection) return;

    const connection = (navigator as any).connection;
    connection.addEventListener('change', async () => {
      const speed = await this.networkSpeed.measureSpeed();
      
      // Ajuster le chargement des scripts en fonction de la nouvelle vitesse
      if (speed > 5) {
        // Charger les scripts différés si la connexion s'améliore
        for (const [src, config] of this.deferredScripts.entries()) {
          if (config.priority !== 'low') {
            await this.loadScript(config);
            this.deferredScripts.delete(src);
          }
        }
      }
    });
  }

  // Configuration des analytics
  async configureAnalytics(config: AnalyticsConfig): Promise<void> {
    if (this.analyticsInitialized) return;

    const { provider, id, options } = config;

    // Respecter Do Not Track
    if (options?.respectDNT && navigator.doNotTrack === '1') {
      return;
    }

    switch (provider) {
      case 'google-analytics':
        await this.setupGoogleAnalytics(id, options);
        break;
      case 'plausible':
        await this.setupPlausible(id, options);
        break;
      case 'custom':
        // Configuration personnalisée
        break;
    }

    this.analyticsInitialized = true;
  }

  // Configuration de Google Analytics
  private async setupGoogleAnalytics(
    id: string,
    options?: AnalyticsConfig['options']
  ): Promise<void> {
    await this.loadScript({
      src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
      async: true,
      priority: 'high'
    });

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    
    const config: any = {
      anonymize_ip: options?.anonymizeIp,
      cookie_flags: 'SameSite=None;Secure'
    };

    if (options?.cookieless) {
      config.storage = 'none';
    }

    gtag('config', id, config);
  }

  // Configuration de Plausible
  private async setupPlausible(
    id: string,
    options?: AnalyticsConfig['options']
  ): Promise<void> {
    await this.loadScript({
      src: 'https://plausible.io/js/script.js',
      defer: true,
      priority: 'high',
      crossOrigin: 'anonymous',
      integrity: 'sha384-...' // À remplacer par le hash correct
    });

    window.plausible = window.plausible || function() {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
  }

  // Nettoyage des scripts
  cleanup(): void {
    this.loadedScripts.clear();
    this.deferredScripts.clear();
    this.analyticsInitialized = false;
  }
}

export const thirdPartyOptimizer = new ThirdPartyOptimizationService();

// Exemple d'utilisation :
/*
// Configuration des scripts tiers
await thirdPartyOptimizer.configureScript({
  src: 'https://example.com/widget.js',
  priority: 'low',
  sandbox: ['allow-scripts']
});

// Configuration des analytics
await thirdPartyOptimizer.configureAnalytics({
  provider: 'google-analytics',
  id: 'G-XXXXXXXXXX',
  options: {
    anonymizeIp: true,
    cookieless: true,
    respectDNT: true
  }
});
*/
