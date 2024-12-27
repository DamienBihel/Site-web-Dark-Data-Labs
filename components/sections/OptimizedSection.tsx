import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useOptimizedAnimation } from '@/hooks/useOptimizedAnimation';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  priority?: 'high' | 'medium' | 'low';
  animation?: 'fade' | 'slide' | 'none';
}

export const OptimizedSection: React.FC<OptimizedSectionProps> = ({
  children,
  className = '',
  priority = 'medium',
  animation = 'fade',
}) => {
  const { isLowPowerMode, isLowBandwidth } = useMobileOptimization();
  const { isMobile } = useDeviceDetect();
  const [isLoaded, setIsLoaded] = useState(priority === 'high');
  const sectionRef = useRef<HTMLDivElement>(null);

  const animationConfig = useOptimizedAnimation({
    duration: 600,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });

  // Configuration de l'Intersection Observer
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.1 : 0.2,
    triggerOnce: true,
    rootMargin: '50px',
  });

  // Optimisation du chargement différé
  useEffect(() => {
    if (inView && !isLoaded) {
      const loadDelay = isLowBandwidth ? 500 : 100;
      const timeoutId = setTimeout(() => setIsLoaded(true), loadDelay);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, isLoaded, isLowBandwidth]);

  // Désactiver les animations en mode économie d'énergie
  const shouldAnimate = animation !== 'none' && !isLowPowerMode && animationConfig.enabled;

  // Styles d'animation
  const getAnimationStyles = () => {
    if (!shouldAnimate) return {};

    const baseStyles = {
      opacity: isLoaded ? 1 : 0,
      transition: `opacity ${animationConfig.optimizedDuration}ms ${animationConfig.optimizedEasing}`,
    };

    if (animation === 'slide') {
      return {
        ...baseStyles,
        transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${animationConfig.optimizedDuration}ms ${animationConfig.optimizedEasing},
                    transform ${animationConfig.optimizedDuration}ms ${animationConfig.optimizedEasing}`,
      };
    }

    return baseStyles;
  };

  // Optimisation du rendu
  const renderContent = () => {
    if (!isLoaded && priority === 'low') {
      return <div className="h-32 animate-pulse bg-gray-200 rounded-md" />;
    }

    return children;
  };

  return (
    <section
      ref={(element) => {
        ref(element);
        if (sectionRef.current) {
          sectionRef.current = element;
        }
      }}
      className={`relative ${className}`}
      style={getAnimationStyles()}
    >
      {renderContent()}
    </section>
  );
};

// Exemple d'utilisation :
/*
<OptimizedSection
  priority="high"
  animation="fade"
  className="py-12"
>
  <h2>Section de contenu</h2>
  <p>Contenu optimisé...</p>
</OptimizedSection>

<OptimizedSection
  priority="low"
  animation="slide"
  className="py-12"
>
  <MobileOptimizedCard>
    Contenu chargé de manière différée...
  </MobileOptimizedCard>
</OptimizedSection>
*/
