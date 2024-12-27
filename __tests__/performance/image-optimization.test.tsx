import { render, screen, waitFor } from '@testing-library/react';
import { EnhancedImage } from '@/components/ui/enhanced-image';
import { OptimizedGallery } from '@/components/ui/optimized-gallery';
import { MobileOptimizationProvider } from '@/contexts/MobileOptimizationContext';
import { imageOptimizer } from '@/services/ImageOptimizationService';
import { performance } from 'perf_hooks';

describe('Image Optimization Performance Tests', () => {
  // Mesure du temps de chargement des images
  const measureImageLoad = async (Component: React.ComponentType) => {
    const start = performance.now();
    render(<Component />);
    await waitFor(() => {
      const images = screen.queryAllByRole('img');
      expect(images.every(img => img.complete)).toBe(true);
    });
    return performance.now() - start;
  };

  // Test de l'optimisation des images individuelles
  test('EnhancedImage loads efficiently', async () => {
    const loadTime = await measureImageLoad(() => (
      <MobileOptimizationProvider>
        <EnhancedImage
          src="/test-image.jpg"
          alt="Test"
          width={800}
          height={600}
          priority={true}
        />
      </MobileOptimizationProvider>
    ));
    expect(loadTime).toBeLessThan(1000); // Chargement en moins d'une seconde
  });

  // Test de la galerie optimisée
  test('OptimizedGallery virtualizes and loads images efficiently', async () => {
    const images = Array.from({ length: 100 }, (_, i) => ({
      src: `/test-image-${i}.jpg`,
      alt: `Test ${i}`,
      width: 800,
      height: 600
    }));

    const loadTime = await measureImageLoad(() => (
      <MobileOptimizationProvider>
        <OptimizedGallery
          images={images}
          columns={3}
          loadingStrategy="progressive"
        />
      </MobileOptimizationProvider>
    ));

    // Vérifie que seules les images visibles sont chargées initialement
    const renderedImages = screen.queryAllByRole('img');
    expect(renderedImages.length).toBeLessThan(images.length);
    expect(loadTime).toBeLessThan(2000); // Chargement initial rapide
  });

  // Test du service d'optimisation
  test('ImageOptimizationService generates optimized versions efficiently', async () => {
    const start = performance.now();
    const result = await imageOptimizer.optimizeImage('/test-image.jpg', {
      formats: [{ format: 'webp', quality: 80 }],
      sizes: [{ width: 400, suffix: 'sm' }]
    });
    const optimizationTime = performance.now() - start;

    expect(optimizationTime).toBeLessThan(3000); // Optimisation rapide
    expect(result.versions.length).toBeGreaterThan(0);
    expect(result.placeholder).toBeTruthy();
  });

  // Test des performances en mode économie d'énergie
  test('Performance in low power mode', async () => {
    const loadTime = await measureImageLoad(() => (
      <MobileOptimizationProvider initialState={{ isLowPowerMode: true }}>
        <EnhancedImage
          src="/test-image.jpg"
          alt="Test"
          width={800}
          height={600}
        />
      </MobileOptimizationProvider>
    ));
    expect(loadTime).toBeLessThan(500); // Encore plus rapide en mode économie
  });
});
