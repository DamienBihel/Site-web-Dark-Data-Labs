import { performanceReporting } from '../services/performanceReporting';

describe('Performance Reporting', () => {
  beforeEach(() => {
    performanceReporting.clearReports();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    performanceReporting.stopReporting();
  });

  test('Ajout de métriques', () => {
    const testMetrics = {
      'test-animation': [{
        startTime: 0,
        duration: 100,
        frameCount: 6,
        averageFrameTime: 16.67
      }]
    };

    performanceReporting.addMetrics('TestComponent', testMetrics);
    const reports = performanceReporting.generateReport();

    expect(reports).toHaveLength(1);
    expect(reports[0].component).toBe('TestComponent');
    expect(reports[0].summary.averageFrameTime).toBeCloseTo(16.67);
    expect(reports[0].summary.totalFrames).toBe(6);
    expect(reports[0].alerts).toHaveLength(0);
  });

  test('Détection des problèmes de performance', () => {
    const poorMetrics = {
      'slow-animation': [{
        startTime: 0,
        duration: 500,
        frameCount: 10,
        averageFrameTime: 50 // Très lent
      }]
    };

    performanceReporting.addMetrics('SlowComponent', poorMetrics);
    const reports = performanceReporting.generateReport();

    expect(reports[0].alerts).toHaveLength(2);
    expect(reports[0].alerts[0]).toContain('Frame time élevé');
    expect(reports[0].alerts[1]).toContain('FPS bas');
  });

  test('Reporting automatique', () => {
    const mockConsole = jest.spyOn(console, 'info').mockImplementation(() => {});
    process.env.NODE_ENV = 'development';
    
    performanceReporting.startReporting();
    
    // Ajouter quelques métriques
    performanceReporting.addMetrics('Component1', {
      'animation1': [{
        startTime: 0,
        duration: 100,
        frameCount: 6,
        averageFrameTime: 16.67
      }]
    });

    // Vérifier que le rapport initial est généré
    expect(performanceReporting.generateReport()).toHaveLength(1);

    // Avancer le temps et déclencher l'intervalle
    jest.advanceTimersByTime(5000);
    
    // Vérifier que console.info a été appelé avec les bonnes données
    expect(mockConsole).toHaveBeenCalled();
    const lastCall = mockConsole.mock.calls[mockConsole.mock.calls.length - 1];
    expect(lastCall[0]).toBe('Rapport de Performance:');
    expect(lastCall[1]).toMatchObject({
      components: ['Component1'],
      totalReports: 1
    });

    mockConsole.mockRestore();
    process.env.NODE_ENV = 'test';
  });

  test('Gestion des seuils personnalisés', () => {
    performanceReporting.setThresholds({
      maxFrameTime: 30, // Plus permissif
      minFps: 30
    });

    const metrics = {
      'animation': [{
        startTime: 0,
        duration: 300,
        frameCount: 10,
        averageFrameTime: 30
      }]
    };

    performanceReporting.addMetrics('TestComponent', metrics);
    const reports = performanceReporting.generateReport();

    // Avec ces seuils plus permissifs, il ne devrait pas y avoir d'alertes
    expect(reports[0].alerts).toHaveLength(0);
  });
});
