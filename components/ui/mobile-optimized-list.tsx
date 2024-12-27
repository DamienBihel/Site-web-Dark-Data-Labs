import React, { useCallback, useRef, useEffect } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';

interface MobileOptimizedListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  estimateSize?: number;
  overscan?: number;
  className?: string;
}

export function MobileOptimizedList<T>({
  items,
  renderItem,
  estimateSize = 50,
  overscan = 5,
  className = '',
}: MobileOptimizedListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useDeviceDetect();
  const { isLowPowerMode, isLowBandwidth } = useMobileOptimization();

  // Ajuster l'overscan en fonction des conditions
  const getOptimizedOverscan = () => {
    if (isLowPowerMode || isLowBandwidth) return 2;
    if (isMobile) return 3;
    if (isTablet) return 4;
    return overscan;
  };

  const optimizedOverscan = getOptimizedOverscan();

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateSize,
    overscan: optimizedOverscan,
  });

  // Optimisation du défilement
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    if (isLowPowerMode) {
      // Réduire la fréquence de mise à jour en mode économie d'énergie
      requestAnimationFrame(() => {
        virtualizer.measure();
      });
    } else {
      virtualizer.measure();
    }
  }, [isLowPowerMode, virtualizer]);

  // Nettoyage de la mémoire
  useEffect(() => {
    return () => {
      virtualizer.cleanup();
    };
  }, [virtualizer]);

  return (
    <div
      ref={parentRef}
      className={`h-full overflow-auto ${className}`}
      onScroll={handleScroll}
      style={{
        contain: 'strict',
        willChange: isLowPowerMode ? 'auto' : 'transform',
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(items[virtualItem.index], virtualItem.index)}
          </div>
        ))}
      </div>
    </div>
  );
}

// Exemple d'utilisation :
/*
const ExampleList = () => {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    title: `Item ${i}`,
  }));

  return (
    <MobileOptimizedList
      items={items}
      renderItem={(item) => (
        <MobileOptimizedCard key={item.id} className="m-2">
          <OptimizedCardContent>{item.title}</OptimizedCardContent>
        </MobileOptimizedCard>
      )}
      estimateSize={80}
      className="h-[500px]"
    />
  );
};
*/
