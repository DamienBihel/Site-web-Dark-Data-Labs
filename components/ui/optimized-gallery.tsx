import React, { useState, useCallback } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { EnhancedImage } from './enhanced-image';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { OptimizedSection } from '../sections/OptimizedSection';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  sources?: Array<{
    src: string;
    width: number;
    height: number;
  }>;
  blurDataURL?: string;
}

interface OptimizedGalleryProps {
  images: GalleryImage[];
  className?: string;
  columns?: number;
  gap?: number;
  loadingStrategy?: 'progressive' | 'lazy' | 'eager';
}

export const OptimizedGallery: React.FC<OptimizedGalleryProps> = ({
  images,
  className = '',
  columns: defaultColumns = 3,
  gap = 16,
  loadingStrategy = 'progressive',
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { isLowPowerMode, isLowBandwidth } = useMobileOptimization();
  const { isMobile, isTablet } = useDeviceDetect();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Déterminer le nombre de colonnes optimal
  const getOptimalColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isLowPowerMode) return Math.min(defaultColumns, 2);
    return defaultColumns;
  };

  const columns = getOptimalColumns();

  // Calculer les dimensions des images
  const calculateImageDimensions = useCallback((image: GalleryImage) => {
    if (!containerRef.current) return { width: 0, height: 0 };

    const containerWidth = containerRef.current.offsetWidth;
    const columnWidth = (containerWidth - (gap * (columns - 1))) / columns;
    const aspectRatio = image.width / image.height;
    
    return {
      width: columnWidth,
      height: columnWidth / aspectRatio,
    };
  }, [columns, gap]);

  // Virtualisation pour les grandes galeries
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(images.length / columns),
    getScrollElement: () => containerRef.current,
    estimateSize: () => 300, // Hauteur estimée d'une rangée
    overscan: isLowPowerMode ? 1 : 2,
  });

  // Gestion du chargement des images
  const getLoadingStrategy = (index: number) => {
    if (loadingStrategy === 'eager') return 'eager';
    if (loadingStrategy === 'progressive' && index < columns * 2) return 'eager';
    return 'lazy';
  };

  // Modal d'image
  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        onClick={() => setSelectedImage(null)}
      >
        <div className="max-w-[90vw] max-h-[90vh]">
          <EnhancedImage
            {...selectedImage}
            className="object-contain"
            priority={true}
            loading="eager"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`relative overflow-auto ${className}`}
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const rowIndex = virtualRow.index;
          const startIndex = rowIndex * columns;

          return (
            <div
              key={virtualRow.key}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: `${gap}px`,
              }}
            >
              {Array.from({ length: columns }).map((_, colIndex) => {
                const imageIndex = startIndex + colIndex;
                const image = images[imageIndex];

                if (!image) return null;

                const dimensions = calculateImageDimensions(image);

                return (
                  <OptimizedSection
                    key={colIndex}
                    priority={imageIndex < columns * 2 ? 'high' : 'low'}
                    animation="fade"
                  >
                    <div
                      className="cursor-pointer transition-transform hover:scale-[1.02]"
                      onClick={() => setSelectedImage(image)}
                    >
                      <EnhancedImage
                        {...image}
                        {...dimensions}
                        loading={getLoadingStrategy(imageIndex)}
                        className="rounded-lg"
                      />
                    </div>
                  </OptimizedSection>
                );
              })}
            </div>
          );
        })}
      </div>

      <ImageModal />
    </>
  );
};

// Exemple d'utilisation :
/*
const images = [
  {
    src: '/images/photo1.jpg',
    alt: 'Photo 1',
    width: 1200,
    height: 800,
    sources: [
      { src: '/images/photo1-sm.webp', width: 400, height: 267 },
      { src: '/images/photo1-md.webp', width: 800, height: 533 }
    ],
    blurDataURL: 'data:image/jpeg;base64,...'
  },
  // ... autres images
];

<OptimizedGallery
  images={images}
  columns={3}
  gap={16}
  loadingStrategy="progressive"
  className="min-h-screen"
/>
*/
