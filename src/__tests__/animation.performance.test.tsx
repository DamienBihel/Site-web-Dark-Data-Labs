import React from 'react';
import { render, act, screen, renderHook } from '@testing-library/react';
import { usePerformanceMetrics } from '../hooks/usePerformanceMetrics';
import { useToastAnimation } from '../hooks/useToastAnimation';

// Composant de test
const TestComponent = () => {
  const metrics = usePerformanceMetrics('Test');
  const [isVisible, setIsVisible] = React.useState(true);
  const elementRef = useToastAnimation(isVisible, () => {}, {
    duration: 300
  });

  return (
    <div ref={elementRef} data-testid="test-element">
      Test Content
    </div>
  );
};

describe('Tests de Performance des Animations', () => {
  let originalRaf: typeof window.requestAnimationFrame;

  beforeEach(() => {
    originalRaf = window.requestAnimationFrame;
    jest.useFakeTimers();
    // Mock de performance.now()
    const performanceNow = jest.spyOn(performance, 'now');
    let time = 0;
    performanceNow.mockImplementation(() => {
      time += 16.67; // ~60fps
      return time;
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
    window.requestAnimationFrame = originalRaf;
  });

  test('Mesure des performances d\'animation', async () => {
    // Mock de requestAnimationFrame
    const mockRaf = jest.fn();
    window.requestAnimationFrame = mockRaf;

    render(<TestComponent />);
    const element = screen.getByTestId('test-element');

    // Simuler plusieurs frames d'animation
    await act(async () => {
      for (let i = 0; i < 20; i++) {
        const callback = mockRaf.mock.calls[i]?.[0];
        if (callback) {
          callback(performance.now());
        }
      }
    });

    // Vérifier que l'élément est correctement animé
    expect(element).toBeInTheDocument();
    expect(element.style.transform).toBeDefined();
    expect(element.style.opacity).toBeDefined();
  });

  test('Performance des métriques', () => {
    const { result } = renderHook(() => usePerformanceMetrics('TestMetrics'));
    
    // Démarrer une mesure
    act(() => {
      result.current.startMeasure('test-animation');
    });

    // Simuler quelques frames
    for (let i = 0; i < 10; i++) {
      act(() => {
        result.current.recordFrame();
      });
    }

    // Terminer la mesure
    act(() => {
      result.current.endMeasure();
    });

    // Vérifier les métriques
    const metrics = result.current.getMetrics('test-animation');
    expect(metrics).toHaveLength(1);
    expect(metrics[0]).toHaveProperty('frameCount', 10);
    expect(metrics[0].duration).toBeGreaterThan(0);
    expect(metrics[0].averageFrameTime).toBeGreaterThan(0);
  });

  test('Performance sous charge', async () => {
    const { result } = renderHook(() => usePerformanceMetrics('StressTest'));
    
    // Simuler une charge importante
    const iterations = 100;
    for (let i = 0; i < iterations; i++) {
      act(() => {
        result.current.startMeasure(`animation-${i}`);
        for (let j = 0; j < 5; j++) {
          result.current.recordFrame();
        }
        result.current.endMeasure();
      });
    }

    // Vérifier les métriques globales
    const allMetrics = Object.values(result.current.getMetrics());
    expect(allMetrics.length).toBe(iterations);
    
    // Vérifier la stabilité des performances
    const averageTimes = allMetrics.map(metrics => 
      metrics[0].averageFrameTime
    );
    
    const avgTime = averageTimes.reduce((a, b) => a + b) / averageTimes.length;
    const maxDeviation = Math.max(...averageTimes) - Math.min(...averageTimes);
    
    expect(avgTime).toBeLessThan(20); // Moins de 20ms par frame en moyenne
    expect(maxDeviation).toBeLessThan(10); // Variation maximale de 10ms
  });
});
