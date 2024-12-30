import { performance } from 'perf_hooks'

export interface PerformanceMetrics {
  renderTime: number
  memoryUsage: {
    heapUsed: number
    heapTotal: number
    external: number
    rss: number
  }
  fps: number
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private measurements: Map<string, PerformanceMetrics[]>

  private constructor() {
    this.measurements = new Map()
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  public startMeasurement(componentName: string): void {
    if (!this.measurements.has(componentName)) {
      this.measurements.set(componentName, [])
    }
  }

  public recordMetrics(componentName: string, metrics: PerformanceMetrics): void {
    const componentMetrics = this.measurements.get(componentName) || []
    componentMetrics.push(metrics)
    this.measurements.set(componentName, componentMetrics)
  }

  public getAverageMetrics(componentName: string): PerformanceMetrics | null {
    const metrics = this.measurements.get(componentName)
    if (!metrics || metrics.length === 0) return null

    const sum = metrics.reduce(
      (acc, curr) => ({
        renderTime: acc.renderTime + curr.renderTime,
        memoryUsage: {
          heapUsed: acc.memoryUsage.heapUsed + curr.memoryUsage.heapUsed,
          heapTotal: acc.memoryUsage.heapTotal + curr.memoryUsage.heapTotal,
          external: acc.memoryUsage.external + curr.memoryUsage.external,
          rss: acc.memoryUsage.rss + curr.memoryUsage.rss
        },
        fps: acc.fps + curr.fps
      }),
      {
        renderTime: 0,
        memoryUsage: { heapUsed: 0, heapTotal: 0, external: 0, rss: 0 },
        fps: 0
      }
    )

    return {
      renderTime: sum.renderTime / metrics.length,
      memoryUsage: {
        heapUsed: sum.memoryUsage.heapUsed / metrics.length,
        heapTotal: sum.memoryUsage.heapTotal / metrics.length,
        external: sum.memoryUsage.external / metrics.length,
        rss: sum.memoryUsage.rss / metrics.length
      },
      fps: sum.fps / metrics.length
    }
  }

  public clearMeasurements(): void {
    this.measurements.clear()
  }
}

export const measurePerformance = async (
  callback: () => Promise<void> | void
): Promise<PerformanceMetrics> => {
  const startTime = performance.now()
  const startMemory = process.memoryUsage()

  let frames = 0
  const frameCounter = setInterval(() => {
    frames++
  }, 1000 / 60)

  await callback()

  clearInterval(frameCounter)
  const endTime = performance.now()
  const endMemory = process.memoryUsage()

  return {
    renderTime: endTime - startTime,
    memoryUsage: {
      heapUsed: endMemory.heapUsed - startMemory.heapUsed,
      heapTotal: endMemory.heapTotal - startMemory.heapTotal,
      external: endMemory.external - startMemory.external,
      rss: endMemory.rss - startMemory.rss
    },
    fps: (frames * 1000) / (endTime - startTime)
  }
}

export const formatBytes = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
}

export const generatePerformanceReport = (metrics: PerformanceMetrics): string => {
  return `
Performance Report:
------------------
Render Time: ${metrics.renderTime.toFixed(2)}ms
FPS: ${metrics.fps.toFixed(2)}
Memory Usage:
  - Heap Used: ${formatBytes(metrics.memoryUsage.heapUsed)}
  - Heap Total: ${formatBytes(metrics.memoryUsage.heapTotal)}
  - External: ${formatBytes(metrics.memoryUsage.external)}
  - RSS: ${formatBytes(metrics.memoryUsage.rss)}
`
}
