import { useState, useEffect, useCallback } from 'react';
import { useImagePreloader } from './useImagePreloader';
import { adaptiveCompressor } from '@/services/AdaptiveCompressionService';
import { NetworkSpeedTest } from '@/services/NetworkSpeedTest';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from './useDeviceDetect';

interface ResourceOptimizationConfig {
  preloadThreshold?: number;
  compressionQuality?: number;
  enableAdaptiveLoading?: boolean;
  priorityLevel?: 'critical' | 'high' | 'medium' | 'low';
}

interface OptimizedResource {
  originalSrc: string;
  optimizedSrc: string;
  width: number;
  height: number;
  format: string;
  quality: number;
  loading: 'eager' | 'lazy';
}

export function useResourceOptimization(
  resources: string[],
  config: ResourceOptimizationConfig = {}
) {
  const [optimizedResources, setOptimizedResources] = useState<OptimizedResource[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [networkSpeed, setNetworkSpeed] = useState<number>(0);
  
  const { isLowPowerMode, isLowBandwidth } = useMobileOptimization();
  const { isMobile, isTablet } = useDeviceDetect();
  const speedTest = new NetworkSpeedTest();

  // Configuration par défaut
  const defaultConfig: Required<ResourceOptimizationConfig> = {
    preloadThreshold: 1000,
    compressionQuality: 80,
    enableAdaptiveLoading: true,
    priorityLevel: 'medium',
  };

  const finalConfig = { ...defaultConfig, ...config };

  // Préchargement des ressources
  const { preloadImage, isImageLoaded } = useImagePreloader(
    resources.map(src => ({ src })),
    {
      priority: finalConfig.priorityLevel,
      threshold: finalConfig.preloadThreshold,
    }
  );

  // Mesure de la vitesse réseau
  const measureNetworkSpeed = useCallback(async () => {
    const speed = await speedTest.measureSpeed();
    setNetworkSpeed(speed);
    return speed;
  }, []);

  // Optimisation adaptative des ressources
  const optimizeResources = useCallback(async () => {
    if (isOptimizing) return;
    setIsOptimizing(true);

    try {
      const speed = await measureNetworkSpeed();
      const optimizedResults = await Promise.all(
        resources.map(async (src) => {
          // Déterminer le format optimal
          const format = speed < 2 ? 'webp' : 'avif';
          
          // Déterminer la qualité optimale
          let quality = finalConfig.compressionQuality;
          if (isLowBandwidth || speed < 1) {
            quality = Math.min(quality, 60);
          } else if (isMobile || speed < 5) {
            quality = Math.min(quality, 75);
          }

          // Déterminer la largeur optimale
          let width = 1920;
          if (isMobile) {
            width = 640;
          } else if (isTablet) {
            width = 1024;
          }

          // Compression adaptative
          const result = await adaptiveCompressor.compressImage(src, `${src}.${format}`, {
            quality,
            format,
            width,
            optimizeMetadata: isLowBandwidth || isLowPowerMode,
          });

          return {
            originalSrc: src,
            optimizedSrc: `${src}.${format}`,
            width: result.width,
            height: Math.round(result.width * (result.width / result.width)),
            format: result.format,
            quality: result.quality,
            loading: finalConfig.priorityLevel === 'critical' ? 'eager' : 'lazy',
          };
        })
      );

      setOptimizedResources(optimizedResults);
    } catch (error) {
      console.error('Error optimizing resources:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [resources, finalConfig, isLowBandwidth, isLowPowerMode, isMobile, isTablet]);

  // Optimisation initiale et surveillance des changements
  useEffect(() => {
    if (finalConfig.enableAdaptiveLoading) {
      optimizeResources();
    }
  }, [optimizeResources, finalConfig.enableAdaptiveLoading]);

  // Surveillance de la connexion réseau
  useEffect(() => {
    if (!navigator.connection) return;

    const connection = (navigator as any).connection;
    const handleChange = () => {
      measureNetworkSpeed();
      if (finalConfig.enableAdaptiveLoading) {
        optimizeResources();
      }
    };

    connection.addEventListener('change', handleChange);
    return () => connection.removeEventListener('change', handleChange);
  }, [measureNetworkSpeed, optimizeResources, finalConfig.enableAdaptiveLoading]);

  return {
    optimizedResources,
    isOptimizing,
    networkSpeed,
    preloadResource: preloadImage,
    isResourceLoaded: isImageLoaded,
    reoptimize: optimizeResources,
  };
}

// Exemple d'utilisation :
/*
const resources = [
  '/images/hero.jpg',
  '/images/about.jpg'
];

function MyComponent() {
  const {
    optimizedResources,
    isOptimizing,
    networkSpeed,
    isResourceLoaded
  } = useResourceOptimization(resources, {
    priorityLevel: 'critical',
    enableAdaptiveLoading: true
  });

  return (
    <div>
      {optimizedResources.map(resource => (
        <EnhancedImage
          key={resource.originalSrc}
          src={resource.optimizedSrc}
          width={resource.width}
          height={resource.height}
          loading={resource.loading}
          quality={resource.quality}
        />
      ))}
    </div>
  );
}
*/
