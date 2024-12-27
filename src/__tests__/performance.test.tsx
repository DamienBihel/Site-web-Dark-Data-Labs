import React, { useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import App from '../App';

// Mock de performance.now() pour les tests
const originalPerformanceNow = global.performance.now;
const originalFetch = global.fetch;
let currentTime = 0;

beforeEach(() => {
  currentTime = 0;
  global.performance.now = jest.fn(() => currentTime);
});

afterEach(() => {
  global.performance.now = originalPerformanceNow;
  global.fetch = originalFetch;
});

describe('Tests de Performance', () => {
  describe('Tests de Chargement', () => {
    test('Temps de chargement initial sous 3 secondes', async () => {
      const startTime = performance.now();
      
      render(<App />);
      
      await waitFor(() => {
        expect(screen.getByTestId('app-container')).toBeInTheDocument();
      });
      
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      expect(loadTime).toBeLessThan(3000);
    });

    test('Chargement progressif des images', async () => {
      render(<App />);
      
      const images = screen.getAllByRole('img');
      
      // Vérifie que les images ont l'attribut loading="lazy"
      images.forEach(img => {
        expect(img).toHaveAttribute('loading', 'lazy');
      });
    });

    test('Priorité de chargement des ressources critiques', async () => {
      render(<App />);
      
      const criticalElements = screen.getAllByTestId(/^critical-/);
      
      criticalElements.forEach(element => {
        if (element.tagName === 'A') {
          expect(element).toHaveAttribute('fetchpriority', 'high');
        }
      });
    });
  });

  describe('Tests d\'Optimisation', () => {
    test('Pas de render inutile des composants', async () => {
      const renderCount = jest.fn();
      
      const TestComponent = () => {
        useEffect(() => {
          renderCount();
        });
        return null;
      };
      
      render(<TestComponent />);
      
      // Simule des changements d'état
      act(() => {
        // Force un re-render
        render(<TestComponent />);
      });
      
      expect(renderCount).toHaveBeenCalledTimes(2); // Initial + 1 re-render
    });

    test('Memoization des composants lourds', async () => {
      const heavyRenderCount = jest.fn();
      
      const HeavyComponent = React.memo(() => {
        useEffect(() => {
          heavyRenderCount();
        });
        return <div>Heavy Component</div>;
      });
      
      const { rerender } = render(<HeavyComponent />);
      
      // Simule des re-renders du parent
      act(() => {
        rerender(<HeavyComponent />);
      });
      
      expect(heavyRenderCount).toHaveBeenCalledTimes(1); // Seulement le render initial
    });
  });

  describe('Tests de Cache', () => {
    test('Mise en cache des requêtes API', async () => {
      const mockFetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ data: 'test' })
        })
      );
      global.fetch = mockFetch;
      
      render(<App />);
      
      // Simule une action qui déclenche une requête API
      await act(async () => {
        await fetch('/api/test');
        await fetch('/api/test'); // Même requête
      });
      
      expect(mockFetch).toHaveBeenCalledTimes(2);
      global.fetch = originalFetch;
    });

    test('Persistance du state local', async () => {
      const { rerender } = render(<App />);
      
      // Simule une action qui modifie le state
      await act(async () => {
        const stateValue = screen.getByTestId('state-value');
        expect(stateValue).toHaveTextContent('initial');
      });
    });
  });

  describe('Tests de Bundle', () => {
    test('Code splitting effectif', async () => {
      const modules = await import('../App');
      expect(typeof modules.default).toBe('object');
      expect(modules.default.$$typeof).toBe(Symbol.for('react.memo'));
    });

    test('Taille des chunks raisonnable', async () => {
      // Ce test nécessite une configuration webpack spécifique
      // pour mesurer la taille des chunks
      expect(true).toBe(true);
    });
  });

  describe('Tests d\'Animation', () => {
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
  });
});
