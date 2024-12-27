import { PerformanceMetric } from '../hooks/usePerformanceMetrics';

interface PerformanceReport {
  timestamp: number;
  component: string;
  metrics: {
    [key: string]: PerformanceMetric[];
  };
  summary: {
    averageFrameTime: number;
    totalFrames: number;
    jankCount: number;
    fpsAverage: number;
  };
  alerts: string[];
}

interface PerformanceThresholds {
  maxFrameTime: number;
  minFps: number;
  maxJankCount: number;
}

const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  maxFrameTime: 16.67, // 60fps
  minFps: 55,
  maxJankCount: 1
};

class PerformanceReporting {
  private static instance: PerformanceReporting;
  private reports: PerformanceReport[] = [];
  private thresholds: PerformanceThresholds;
  private reportingInterval: number = 5000; // 5 secondes
  private intervalId?: NodeJS.Timeout;

  private constructor() {
    this.thresholds = DEFAULT_THRESHOLDS;
  }

  public static getInstance(): PerformanceReporting {
    if (!PerformanceReporting.instance) {
      PerformanceReporting.instance = new PerformanceReporting();
    }
    return PerformanceReporting.instance;
  }

  public setThresholds(thresholds: Partial<PerformanceThresholds>) {
    this.thresholds = { ...this.thresholds, ...thresholds };
  }

  public startReporting() {
    if (this.intervalId) return;
    
    this.intervalId = setInterval(() => {
      this.generateReport();
    }, this.reportingInterval);
  }

  public stopReporting() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public addMetrics(component: string, metrics: { [key: string]: PerformanceMetric[] }) {
    const report = this.createReport(component, metrics);
    this.reports.push(report);
    this.checkAlerts(report);
  }

  private createReport(component: string, metrics: { [key: string]: PerformanceMetric[] }): PerformanceReport {
    const allMetrics = Object.values(metrics).flat();
    const totalFrames = allMetrics.reduce((sum, m) => sum + m.frameCount, 0);
    const totalTime = allMetrics.reduce((sum, m) => sum + m.duration, 0);
    const jankCount = this.countJanks(allMetrics);

    return {
      timestamp: Date.now(),
      component,
      metrics,
      summary: {
        averageFrameTime: totalTime / totalFrames,
        totalFrames,
        jankCount,
        fpsAverage: 1000 / (totalTime / totalFrames)
      },
      alerts: []
    };
  }

  private countJanks(metrics: PerformanceMetric[]): number {
    return metrics.filter(m => m.averageFrameTime > this.thresholds.maxFrameTime).length;
  }

  private checkAlerts(report: PerformanceReport) {
    const alerts: string[] = [];
    const { summary } = report;

    if (summary.averageFrameTime > this.thresholds.maxFrameTime) {
      alerts.push(`⚠️ Frame time élevé: ${summary.averageFrameTime.toFixed(2)}ms (max: ${this.thresholds.maxFrameTime}ms)`);
    }

    if (summary.fpsAverage < this.thresholds.minFps) {
      alerts.push(`⚠️ FPS bas: ${summary.fpsAverage.toFixed(1)} (min: ${this.thresholds.minFps})`);
    }

    if (summary.jankCount > this.thresholds.maxJankCount) {
      alerts.push(`⚠️ Janks détectés: ${summary.jankCount} (max: ${this.thresholds.maxJankCount})`);
    }

    report.alerts = alerts;

    if (alerts.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn(`Performance Alerts pour ${report.component}:`, alerts);
    }
  }

  public generateReport(): PerformanceReport[] {
    const recentReports = this.reports.slice(-100); // Garder les 100 derniers rapports
    
    if (process.env.NODE_ENV === 'development') {
      console.info('Rapport de Performance:', {
        totalReports: recentReports.length,
        components: [...new Set(recentReports.map(r => r.component))],
        averageFps: this.calculateAverageFps(recentReports),
        alerts: recentReports.flatMap(r => r.alerts)
      });
    }

    return recentReports;
  }

  private calculateAverageFps(reports: PerformanceReport[]): number {
    if (reports.length === 0) return 0;
    return reports.reduce((sum, r) => sum + r.summary.fpsAverage, 0) / reports.length;
  }

  public clearReports() {
    this.reports = [];
  }
}

export const performanceReporting = PerformanceReporting.getInstance();
