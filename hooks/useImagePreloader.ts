import { useState, useEffect } from 'react';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

interface ImageSource {
  src: string;
  width?: number;
  height?: number;
}

interface PreloadConfig {
  priority: 'critical' | 'high' | 'medium' | 'low';
  threshold?: number; // Distance en pixels avant le préchargement
}

const defaultConfig: PreloadConfig = {
  priority: 'medium',
  threshold: 1000,
};

export function useImagePreloader(
  images: ImageSource[],
  config: Partial<PreloadConfig> = {}
) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const { isLowBandwidth, isLowPowerMode } = useMobileOptimization();
  const { isMobile } = useDeviceDetect();

  const finalConfig = { ...defaultConfig, ...config };

  // Ajuster la configuration en fonction des conditions
  const getOptimizedConfig = () => {
    if (isLowBandwidth || isLowPowerMode) {
      return {
        ...finalConfig,
        threshold: finalConfig.threshold! * 0.5, // Réduire la distance de préchargement
        priority: 'low' as const,
      };
    }

    if (isMobile) {
      return {
        ...finalConfig,
        threshold: finalConfig.threshold! * 0.75,
      };
    }

    return finalConfig;
  };

  const optimizedConfig = getOptimizedConfig();

  // Précharger une image
  const preloadImage = async (image: ImageSource): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (loadedImages.has(image.src)) {
        resolve();
        return;
      }

      const img = new Image();
      
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, image.src]));
        resolve();
      };

      img.onerror = reject;
      img.src = image.src;
    });
  };

  // Observer d'intersection pour le préchargement
  useEffect(() => {
    if (optimizedConfig.priority === 'critical') {
      // Précharger immédiatement les images critiques
      images.forEach(image => preloadImage(image));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const imageUrl = entry.target.getAttribute('data-src');
            if (imageUrl) {
              const image = images.find(img => img.src === imageUrl);
              if (image) {
                preloadImage(image);
              }
            }
          }
        });
      },
      {
        rootMargin: `${optimizedConfig.threshold}px`,
      }
    );

    // Créer des éléments observables pour chaque image
    const elements = images.map(image => {
      const element = document.createElement('div');
      element.setAttribute('data-src', image.src);
      element.style.height = '1px';
      element.style.width = '1px';
      element.style.position = 'absolute';
      element.style.opacity = '0';
      element.style.pointerEvents = 'none';
      document.body.appendChild(element);
      observer.observe(element);
      return element;
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
        element.remove();
      });
    };
  }, [images, optimizedConfig.threshold, optimizedConfig.priority]);

  return {
    loadedImages,
    preloadImage,
    isImageLoaded: (src: string) => loadedImages.has(src),
  };
}

// Exemple d'utilisation :
/*
const images = [
  { src: '/hero.jpg', width: 1920, height: 1080 },
  { src: '/about.jpg', width: 800, height: 600 },
];

function MyComponent() {
  const { isImageLoaded, preloadImage } = useImagePreloader(images, {
    priority: 'critical',
    threshold: 1000,
  });

  return (
    <div>
      {images.map(image => (
        <EnhancedImage
          key={image.src}
          {...image}
          loading={isImageLoaded(image.src) ? undefined : 'lazy'}
        />
      ))}
    </div>
  );
}
*/
