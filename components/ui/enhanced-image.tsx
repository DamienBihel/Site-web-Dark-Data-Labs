import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useInView } from 'react-intersection-observer';

interface ImageSource {
  src: string;
  width: number;
  height: number;
}

interface EnhancedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sources?: ImageSource[];
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality,
  placeholder = 'empty',
  blurDataURL,
  sources = [],
  loading = 'lazy',
  sizes,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const { isLowBandwidth, isLowPowerMode } = useMobileOptimization();
  const { isMobile, isTablet } = useDeviceDetect();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  // Sélection de la qualité d'image optimale
  const getOptimalQuality = () => {
    if (isLowBandwidth) return Math.min(quality || 75, 60);
    if (isMobile) return Math.min(quality || 75, 80);
    if (isTablet) return Math.min(quality || 75, 85);
    return quality || 75;
  };

  // Sélection de la source optimale
  useEffect(() => {
    if (sources.length === 0) return;

    const getOptimalSource = () => {
      if (isLowBandwidth) {
        return sources.reduce((prev, curr) => 
          prev.width < curr.width ? prev : curr
        );
      }

      const viewportWidth = window.innerWidth;
      const optimalSource = sources.find(source => 
        source.width >= viewportWidth
      ) || sources[sources.length - 1];

      return optimalSource;
    };

    const optimal = getOptimalSource();
    setCurrentSrc(optimal.src);
  }, [sources, isLowBandwidth]);

  // Gestion du chargement progressif
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Optimisation des tailles d'image
  const getSizes = () => {
    if (sizes) return sizes;
    if (isMobile) return '100vw';
    if (isTablet) return '75vw';
    return '50vw';
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {inView && (
        <>
          {/* Image de faible qualité pour le chargement progressif */}
          {placeholder === 'blur' && blurDataURL && !isLoaded && (
            <Image
              src={blurDataURL}
              alt={alt}
              fill
              className="absolute inset-0 blur-sm scale-110"
              priority
            />
          )}

          {/* Image principale */}
          <Image
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            quality={getOptimalQuality()}
            priority={priority}
            loading={loading}
            sizes={getSizes()}
            className={`
              transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={handleLoad}
          />
        </>
      )}

      {/* Fallback pendant le chargement */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
    </div>
  );
};

// Exemple d'utilisation :
/*
<EnhancedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={800}
  priority={true}
  sources={[
    { src: '/images/hero-sm.webp', width: 640, height: 427 },
    { src: '/images/hero-md.webp', width: 1024, height: 683 },
    { src: '/images/hero-lg.webp', width: 1920, height: 1280 }
  ]}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
*/
