import { useRef, useEffect } from 'react';
import { usePerformanceMetrics } from './usePerformanceMetrics';

interface AnimationConfig {
  duration: number;
  easing: (t: number) => number;
}

const defaultEasing = (t: number): number => {
  // Fonction d'easing personnalisée pour une animation fluide
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const useToastAnimation = (
  isVisible: boolean,
  onAnimationComplete: () => void,
  config: Partial<AnimationConfig> = {}
) => {
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const elementRef = useRef<HTMLDivElement>(null);
  const metrics = usePerformanceMetrics('Toast');

  const { duration = 300, easing = defaultEasing } = config;

  useEffect(() => {
    if (!elementRef.current) return;

    // Démarrer la mesure de performance
    metrics.startMeasure(isVisible ? 'enter' : 'exit');

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);

      // Enregistrer chaque frame
      metrics.recordFrame();

      if (elementRef.current) {
        if (isVisible) {
          // Animation d'entrée
          elementRef.current.style.transform = `translateX(${(1 - easedProgress) * 100}%)`;
          elementRef.current.style.opacity = `${easedProgress}`;
        } else {
          // Animation de sortie
          elementRef.current.style.transform = `translateX(${easedProgress * 100}%)`;
          elementRef.current.style.opacity = `${1 - easedProgress}`;
        }
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Terminer la mesure de performance
        metrics.endMeasure();
        
        if (!isVisible) {
          onAnimationComplete();
        }
      }
    };

    // Nettoyer l'animation précédente
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    startTimeRef.current = undefined;
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        metrics.endMeasure();
      }
    };
  }, [isVisible, duration, easing, onAnimationComplete, metrics]);

  return elementRef;
};
