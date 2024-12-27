import { useRef, useEffect } from 'react';
import { performanceReporting } from '../services/performanceReporting';

export interface PerformanceMetric {
  startTime: number;
  duration: number;
  frameCount: number;
  averageFrameTime: number;
}

interface PerformanceMetrics {
  [key: string]: PerformanceMetric[];
}

export const usePerformanceMetrics = (componentName: string) => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const frameCountRef = useRef(0);
  const startTimeRef = useRef(0);
  const animationNameRef = useRef<string>('');

  // Démarrer le reporting automatique
  useEffect(() => {
    performanceReporting.startReporting();
    return () => performanceReporting.stopReporting();
  }, []);

  const startMeasure = (animationName: string) => {
    animationNameRef.current = animationName;
    startTimeRef.current = performance.now();
    frameCountRef.current = 0;
  };

  const recordFrame = () => {
    frameCountRef.current++;
  };

  const endMeasure = () => {
    const endTime = performance.now();
    const duration = endTime - startTimeRef.current;
    const animationName = animationNameRef.current;

    if (!metricsRef.current[animationName]) {
      metricsRef.current[animationName] = [];
    }

    const metric = {
      startTime: startTimeRef.current,
      duration,
      frameCount: frameCountRef.current,
      averageFrameTime: duration / frameCountRef.current
    };

    metricsRef.current[animationName].push(metric);

    // Envoyer les métriques au système de reporting
    performanceReporting.addMetrics(componentName, {
      [animationName]: [metric]
    });

    if (process.env.NODE_ENV === 'development') {
      console.debug(`Performance Metrics for ${componentName} - ${animationName}:`, {
        duration: `${duration.toFixed(2)}ms`,
        frameCount: frameCountRef.current,
        averageFrameTime: `${(duration / frameCountRef.current).toFixed(2)}ms`
      });
    }
  };

  const getMetrics = (animationName?: string) => {
    if (animationName) {
      return metricsRef.current[animationName] || [];
    }
    return metricsRef.current;
  };

  // Nettoyage des métriques au démontage
  useEffect(() => {
    return () => {
      metricsRef.current = {};
    };
  }, []);

  return {
    startMeasure,
    recordFrame,
    endMeasure,
    getMetrics
  };
};
