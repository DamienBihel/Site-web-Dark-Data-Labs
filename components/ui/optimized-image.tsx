import React from 'react';
import Image from 'next/image';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}) => {
  const { isLowBandwidth, isLowPowerMode } = useMobileOptimization();
  const { isMobile, isTablet } = useDeviceDetect();

  // Calculer la qualité de l'image en fonction des conditions
  const getImageQuality = () => {
    if (isLowBandwidth || isLowPowerMode) return 60;
    if (isMobile) return 75;
    if (isTablet) return 85;
    return 100;
  };

  // Calculer les dimensions optimisées
  const getOptimizedDimensions = () => {
    if (!width || !height) return { width: undefined, height: undefined };

    let scale = 1;
    if (isLowPowerMode || isLowBandwidth) scale = 0.75;
    else if (isMobile) scale = 0.85;
    else if (isTablet) scale = 0.9;

    return {
      width: Math.round(width * scale),
      height: Math.round(height * scale),
    };
  };

  const dimensions = getOptimizedDimensions();
  const quality = getImageQuality();

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className="w-full h-auto"
        sizes={`
          (max-width: 640px) 100vw,
          (max-width: 768px) 85vw,
          (max-width: 1024px) 75vw,
          60vw
        `}
      />
    </div>
  );
};
