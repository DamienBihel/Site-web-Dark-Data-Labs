import { fetchMetrics, MetricsResponse } from '@/services/MonitoringService';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/metrics', (req, res, ctx) => {
    const timePeriod = req.url.searchParams.get('period');
    const mockData: MetricsResponse = {
      cpu: Array.from({ length: 24 }, (_, i) => ({
        timestamp: new Date(Date.now() - i * 3600000).toISOString(),
        value: Math.random() * 100
      })),
      memory: Array.from({ length: 24 }, (_, i) => ({
        timestamp: new Date(Date.now() - i * 3600000).toISOString(),
        value: Math.random() * 16
      })),
      latency: Array.from({ length: 24 }, (_, i) => ({
        timestamp: new Date(Date.now() - i * 3600000).toISOString(),
        value: Math.random() * 200
      })),
      summary: {
        responseTime: 120,
        errorRate: 0.5,
        requestsPerMinute: 2450,
        availability: 99.9
      }
    };
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MonitoringService', () => {
  it('should fetch metrics data successfully', async () => {
    const data = await fetchMetrics('24h');
    expect(data).toBeDefined();
    expect(data.cpu).toHaveLength(24);
    expect(data.memory).toHaveLength(24);
    expect(data.latency).toHaveLength(24);
    expect(data.summary).toBeDefined();
  });

  it('should handle different time periods', async () => {
    const periods = ['24h', '7d', '30d'];
    for (const period of periods) {
      const data = await fetchMetrics(period);
      expect(data).toBeDefined();
    }
  });

  it('should handle errors gracefully', async () => {
    server.use(
      rest.get('/api/metrics', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    
    await expect(fetchMetrics('24h')).rejects.toThrow();
  });
});
