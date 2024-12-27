# Exemples d'Intégration Dark Data Labs

## 📚 Table des Matières

1. [Cas d'Utilisation Basiques](#cas-dutilisation-basiques)
2. [Scénarios Avancés](#scénarios-avancés)
3. [Personnalisation](#personnalisation)
4. [Migration](#migration)

## 🎯 Cas d'Utilisation Basiques

### Page Hero avec Image Optimisée

```tsx
import { EnhancedImage } from '@/components/ui/enhanced-image';
import { OptimizedSection } from '@/components/sections/OptimizedSection';

export function HeroSection() {
  return (
    <OptimizedSection
      priority="high"
      className="relative h-screen"
      animation="fade"
    >
      <EnhancedImage
        src="/images/hero-background.jpg"
        alt="Hero Background"
        width={1920}
        height={1080}
        priority={true}
        className="absolute inset-0 object-cover"
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl font-bold">
          Dark Data Labs
        </h1>
        <p className="mt-4 text-xl">
          Transformez vos données en croissance mesurable
        </p>
      </div>
    </OptimizedSection>
  );
}
```

### Galerie d'Images Optimisée

```tsx
import { OptimizedGallery } from '@/components/ui/optimized-gallery';

const images = [
  {
    src: '/images/case-study-1.jpg',
    alt: 'Case Study 1',
    width: 800,
    height: 600
  },
  // ... plus d'images
];

export function CaseStudyGallery() {
  return (
    <OptimizedGallery
      images={images}
      columns={3}
      gap={4}
      loadingStrategy="progressive"
    />
  );
}
```

## 🚀 Scénarios Avancés

### Page avec Chargement Optimisé

```tsx
import { useResourceOptimization } from '@/hooks/useResourceOptimization';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { thirdPartyOptimizer } from '@/services/ThirdPartyOptimizationService';

export function OptimizedPage() {
  // Optimisation des ressources
  const resources = [
    '/images/hero.jpg',
    '/images/about.jpg'
  ];
  
  const { optimizedResources } = useResourceOptimization(resources, {
    priorityLevel: 'critical'
  });

  // Préchargement des images
  useImagePreloader(resources, {
    priority: 'high',
    threshold: 1000
  });

  // Configuration des scripts tiers
  useEffect(() => {
    thirdPartyOptimizer.configureScript({
      src: 'https://analytics.example.com/script.js',
      priority: 'low',
      defer: true
    });
  }, []);

  return (
    <div>
      {optimizedResources.map(resource => (
        <EnhancedImage
          key={resource.originalSrc}
          {...resource}
        />
      ))}
    </div>
  );
}
```

### Système de Cache Avancé

```tsx
import { advancedCache } from '@/services/AdvancedCacheService';
import { useEffect } from 'react';

export function CachedDataComponent() {
  useEffect(() => {
    // Configuration du cache
    advancedCache.configureCacheStore({
      name: 'api-data',
      version: 1,
      maxAge: 3600,
      maxItems: 100
    });

    // Fonction de chargement des données
    async function loadData() {
      // Vérifier le cache
      const cachedData = await advancedCache.getCachedResource(
        'api-data',
        '/api/data'
      );

      if (cachedData) {
        return cachedData.json();
      }

      // Charger les données si pas en cache
      const response = await fetch('/api/data');
      const data = await response.json();

      // Mettre en cache
      await advancedCache.cacheResource(
        'api-data',
        '/api/data',
        new Response(JSON.stringify(data))
      );

      return data;
    }

    loadData();
  }, []);

  return (
    // Rendu du composant
  );
}
```

## 🎨 Personnalisation

### Thème Personnalisé

```tsx
import { ThemeProvider } from '@/components/theme-provider';

const customTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0080'
  },
  fonts: {
    sans: 'Montserrat, sans-serif',
    mono: 'JetBrains Mono, monospace'
  }
};

export function App({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  );
}
```

### Animations Personnalisées

```tsx
import { motion } from 'framer-motion';
import { OptimizedSection } from '@/components/sections/OptimizedSection';

const customAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export function CustomAnimatedSection() {
  return (
    <OptimizedSection priority="high">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={customAnimation}
      >
        {/* Contenu animé */}
      </motion.div>
    </OptimizedSection>
  );
}
```

## 🔄 Migration

### Migration depuis une Application Existante

```typescript
// 1. Configuration du cache
await advancedCache.configureCacheStore({
  name: 'legacy-data',
  version: 1,
  maxAge: 3600
});

// 2. Migration des images
const legacyImages = document.querySelectorAll('img');
legacyImages.forEach(async (img) => {
  const optimizedImage = await imageOptimizer.optimizeImage(img.src, {
    formats: ['webp', 'avif'],
    sizes: [
      { width: 640, suffix: 'sm' },
      { width: 1024, suffix: 'md' }
    ]
  });
  
  // Remplacer l'image
  img.srcset = optimizedImage.srcset;
  img.sizes = optimizedImage.sizes;
});

// 3. Migration des scripts
const legacyScripts = document.querySelectorAll('script[src]');
legacyScripts.forEach(async (script) => {
  await thirdPartyOptimizer.configureScript({
    src: script.src,
    priority: 'low',
    defer: true
  });
  script.remove();
});
```

### Migration des Polices

```typescript
// 1. Configuration des polices
const fontConfigs = [
  {
    family: 'Legacy Font',
    variants: [
      { weight: 400, style: 'normal' },
      { weight: 700, style: 'normal' }
    ],
    display: 'swap',
    preload: true
  }
];

// 2. Optimisation des polices
await fontOptimizer.injectOptimizedFonts(fontConfigs);

// 3. Nettoyage des anciennes polices
const oldFontStyles = document.querySelectorAll(
  'link[rel="stylesheet"][href*="fonts"]'
);
oldFontStyles.forEach(style => style.remove());
```
