import { useEffect, useRef, useState } from 'react';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

interface AnimationConfig {
  duration?: number;
  easing?: string;
  delay?: number;
}

interface OptimizedAnimationConfig extends AnimationConfig {
  enabled: boolean;
  optimizedDuration: number;
  optimizedEasing: string;
  optimizedDelay: number;
}

export const useOptimizedAnimation = (config: AnimationConfig = {}): OptimizedAnimationConfig => {
  const { isLowPowerMode, isReducedMotion } = useMobileOptimization();
  const { isMobile, isTablet } = useDeviceDetect();
  const frameRef = useRef<number>();
  const [isEnabled, setIsEnabled] = useState(true);

  const {
    duration = 300,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay = 0,
  } = config;

  useEffect(() => {
    // Désactiver les animations si l'utilisateur préfère les mouvements réduits
    if (isReducedMotion) {
      setIsEnabled(false);
      return;
    }

    // Optimiser les animations en fonction des conditions
    const shouldOptimize = isLowPowerMode || isMobile;
    setIsEnabled(!shouldOptimize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isLowPowerMode, isReducedMotion, isMobile]);

  // Calculer les paramètres d'animation optimisés
  const getOptimizedDuration = () => {
    if (isLowPowerMode) return duration * 0.5;
    if (isMobile) return duration * 0.7;
    if (isTablet) return duration * 0.85;
    return duration;
  };

  const getOptimizedEasing = () => {
    if (isLowPowerMode || isMobile) {
      return 'ease-out'; // Utiliser une courbe d'accélération plus simple
    }
    return easing;
  };

  const getOptimizedDelay = () => {
    if (isLowPowerMode) return 0;
    if (isMobile) return delay * 0.5;
    return delay;
  };

  return {
    enabled: isEnabled,
    optimizedDuration: getOptimizedDuration(),
    optimizedEasing: getOptimizedEasing(),
    optimizedDelay: getOptimizedDelay(),
  };
};

// Exemple d'utilisation :
/*
const MyComponent = () => {
  const animation = useOptimizedAnimation({
    duration: 500,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 150,
  });

  return (
    <div
      style={{
        transition: animation.enabled
          ? `all ${animation.optimizedDuration}ms ${animation.optimizedEasing} ${animation.optimizedDelay}ms`
          : 'none',
      }}
    >
      Contenu animé
    </div>
  );
};
*/
