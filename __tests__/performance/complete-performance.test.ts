import { render, screen, waitFor } from '@testing-library/react';
import { performance } from 'perf_hooks';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';
import { advancedCache } from '@/services/AdvancedCacheService';
import { fontOptimizer } from '@/services/FontOptimizationService';
import { thirdPartyOptimizer } from '@/services/ThirdPartyOptimizationService';
import { imageOptimizer } from '@/services/ImageOptimizationService';

describe('Complete Performance Tests', () => {
  let browser: any;
  let page: any;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.setCacheEnabled(false);
  });

  afterEach(async () => {
    await page.close();
  });

  // Tests de performance Lighthouse
  test('Lighthouse performance audit', async () => {
    const port = 3000; // Port de développement Next.js
    const url = `http://localhost:${port}`;
    
    const results = await lighthouse(url, {
      port: (new URL(browser.wsEndpoint())).port,
      output: 'json',
      onlyCategories: ['performance']
    });

    const performanceScore = results.lhr.categories.performance.score * 100;
    expect(performanceScore).toBeGreaterThan(90);
  });

  // Tests de chargement initial
  test('Initial page load performance', async () => {
    const startTime = performance.now();
    
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0'
    });

    const loadTime = performance.now() - startTime;
    expect(loadTime).toBeLessThan(3000); // Chargement en moins de 3 secondes

    // Métriques Web Vitals
    const metrics = await page.evaluate(() => ({
      fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
      lcp: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime,
      fid: performance.getEntriesByName('first-input-delay')[0]?.duration,
      cls: performance.getEntriesByName('cumulative-layout-shift')[0]?.value
    }));

    expect(metrics.fcp).toBeLessThan(1000);
    expect(metrics.lcp).toBeLessThan(2500);
    expect(metrics.fid).toBeLessThan(100);
    expect(metrics.cls).toBeLessThan(0.1);
  });

  // Tests de performance des images
  test('Image optimization performance', async () => {
    // Test de compression d'image
    const imageResult = await imageOptimizer.optimizeImage('/test-image.jpg', {
      formats: ['webp', 'avif'],
      sizes: [
        { width: 640, suffix: 'sm' },
        { width: 1024, suffix: 'md' },
        { width: 1920, suffix: 'lg' }
      ]
    });

    expect(imageResult.compressionRatio).toBeGreaterThan(0.3); // 30% de réduction minimum
    expect(imageResult.versions).toHaveLength(6); // 2 formats x 3 tailles

    // Test de chargement d'image
    const imageLoadTime = await page.evaluate(async () => {
      const start = performance.now();
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = '/test-image.jpg';
      });
      return performance.now() - start;
    });

    expect(imageLoadTime).toBeLessThan(1000);
  });

  // Tests de performance des polices
  test('Font optimization performance', async () => {
    const fontConfig = {
      family: 'Montserrat',
      variants: [
        { weight: 400, style: 'normal' },
        { weight: 700, style: 'normal' }
      ],
      display: 'swap',
      preload: true,
      format: 'woff2'
    };

    await fontOptimizer.injectOptimizedFonts([fontConfig]);

    const fontLoadMetrics = await page.evaluate(() => {
      const entries = performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('woff2'));
      return entries.map(entry => ({
        duration: entry.duration,
        size: entry.encodedBodySize
      }));
    });

    fontLoadMetrics.forEach(metric => {
      expect(metric.duration).toBeLessThan(500);
      expect(metric.size).toBeLessThan(50000); // 50KB max par police
    });
  });

  // Tests de performance du cache
  test('Cache performance', async () => {
    // Configuration du cache
    await advancedCache.configureCacheStore({
      name: 'test-cache',
      version: 1,
      maxAge: 3600,
      maxItems: 100
    });

    // Test de mise en cache
    const cacheStartTime = performance.now();
    await advancedCache.cacheResource(
      'test-cache',
      '/test-resource.json',
      new Response(JSON.stringify({ test: 'data' }))
    );
    const cacheDuration = performance.now() - cacheStartTime;
    expect(cacheDuration).toBeLessThan(100);

    // Test de récupération du cache
    const retrievalStartTime = performance.now();
    const cachedResponse = await advancedCache.getCachedResource(
      'test-cache',
      '/test-resource.json'
    );
    const retrievalDuration = performance.now() - retrievalStartTime;
    
    expect(retrievalDuration).toBeLessThan(50);
    expect(cachedResponse).toBeDefined();
  });

  // Tests de performance des scripts tiers
  test('Third-party script optimization', async () => {
    // Configuration du script
    const scriptConfig = {
      src: 'https://example.com/test-script.js',
      priority: 'low' as const,
      defer: true
    };

    const loadStartTime = performance.now();
    await thirdPartyOptimizer.configureScript(scriptConfig);
    const loadDuration = performance.now() - loadStartTime;

    expect(loadDuration).toBeLessThan(200);

    // Vérification du chargement différé
    const scriptElement = await page.$('script[src="https://example.com/test-script.js"]');
    expect(scriptElement).toHaveAttribute('defer');
  });

  // Tests de performance sous charge
  test('Load testing', async () => {
    const concurrentUsers = 10;
    const requests = Array(concurrentUsers).fill(null).map(async () => {
      const userPage = await browser.newPage();
      const startTime = performance.now();
      
      await userPage.goto('http://localhost:3000', {
        waitUntil: 'networkidle0'
      });
      
      const loadTime = performance.now() - startTime;
      await userPage.close();
      return loadTime;
    });

    const loadTimes = await Promise.all(requests);
    const averageLoadTime = loadTimes.reduce((a, b) => a + b) / loadTimes.length;

    expect(averageLoadTime).toBeLessThan(5000); // 5 secondes max en charge
  });

  // Tests de performance mobile
  test('Mobile performance', async () => {
    await page.emulate(puppeteer.devices['iPhone X']);

    const mobileStartTime = performance.now();
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0'
    });
    const mobileLoadTime = performance.now() - mobileStartTime;

    expect(mobileLoadTime).toBeLessThan(4000); // 4 secondes max sur mobile

    // Vérification des images responsives
    const images = await page.$$eval('img', (imgs: any[]) => 
      imgs.map(img => ({
        src: img.src,
        srcset: img.srcset,
        sizes: img.sizes
      }))
    );

    images.forEach(image => {
      expect(image.srcset).toBeDefined();
      expect(image.sizes).toBeDefined();
    });
  });
});
