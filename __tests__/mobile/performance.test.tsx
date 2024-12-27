import { render, act } from '@testing-library/react';
import { MobileOptimizationProvider } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useOptimizedAnimation } from '@/hooks/useOptimizedAnimation';
import { OptimizedImage } from '@/components/ui/optimized-image';

// Mock des hooks de détection
jest.mock('@/hooks/useDeviceDetect', () => ({
  useDeviceDetect: jest.fn()
}));

describe('Mobile Performance Tests', () => {
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Mock performance API
    if (!window.performance) {
      window.performance = {
        mark: jest.fn(),
        measure: jest.fn(),
        getEntriesByType: jest.fn(),
        clearMarks: jest.fn(),
        clearMeasures: jest.fn()
      } as any;
    }
  });

  describe('Device Detection', () => {
    it('should correctly identify mobile devices', () => {
      (useDeviceDetect as jest.Mock).mockReturnValue({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
        orientation: 'portrait'
      });

      const TestComponent = () => {
        const device = useDeviceDetect();
        return <div data-testid="device">{JSON.stringify(device)}</div>;
      };

      const { getByTestId } = render(<TestComponent />);
      expect(JSON.parse(getByTestId('device').textContent || '{}')).toEqual({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
        orientation: 'portrait'
      });
    });
  });

  describe('Animation Performance', () => {
    it('should optimize animations for mobile devices', () => {
      const TestComponent = () => {
        const animation = useOptimizedAnimation({
          duration: 1000,
          delay: 200
        });
        return <div data-testid="animation">{JSON.stringify(animation)}</div>;
      };

      (useDeviceDetect as jest.Mock).mockReturnValue({
        isMobile: true,
        isTablet: false,
        isDesktop: false
      });

      const { getByTestId } = render(
        <MobileOptimizationProvider>
          <TestComponent />
        </MobileOptimizationProvider>
      );

      const animationConfig = JSON.parse(getByTestId('animation').textContent || '{}');
      expect(animationConfig.optimizedDuration).toBeLessThan(1000);
      expect(animationConfig.optimizedDelay).toBeLessThan(200);
    });
  });

  describe('Image Optimization', () => {
    it('should apply correct optimization for mobile devices', () => {
      (useDeviceDetect as jest.Mock).mockReturnValue({
        isMobile: true,
        isTablet: false,
        isDesktop: false
      });

      const { container } = render(
        <MobileOptimizationProvider>
          <OptimizedImage
            src="/test-image.jpg"
            alt="Test"
            width={1000}
            height={1000}
          />
        </MobileOptimizationProvider>
      );

      const img = container.querySelector('img');
      expect(img).toHaveAttribute('width', expect.any(String));
      const width = parseInt(img?.getAttribute('width') || '1000');
      expect(width).toBeLessThan(1000);
    });
  });

  describe('Performance Metrics', () => {
    it('should measure component render time', async () => {
      performance.mark('start-render');
      
      const { rerender } = render(
        <MobileOptimizationProvider>
          <div>Test Component</div>
        </MobileOptimizationProvider>
      );

      performance.mark('end-render');
      performance.measure('render-time', 'start-render', 'end-render');

      // Simulate multiple rerenders
      await act(async () => {
        for (let i = 0; i < 5; i++) {
          rerender(
            <MobileOptimizationProvider>
              <div>Test Component {i}</div>
            </MobileOptimizationProvider>
          );
        }
      });

      expect(performance.getEntriesByType('measure')).toBeDefined();
    });
  });
});
