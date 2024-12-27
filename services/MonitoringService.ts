export interface MetricDataPoint {
  timestamp: string;
  value: number;
}

export interface MetricsSummary {
  responseTime: number;
  errorRate: number;
  requestsPerMinute: number;
  availability: number;
}

export interface MetricsResponse {
  cpu: MetricDataPoint[];
  memory: MetricDataPoint[];
  latency: MetricDataPoint[];
  summary: MetricsSummary;
}

export const fetchMetrics = async (period: string): Promise<MetricsResponse> => {
  try {
    const response = await fetch(`/api/metrics?period=${period}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data: MetricsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des métriques:', error);
    throw error;
  }
};
