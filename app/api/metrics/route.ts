import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const period = searchParams.get('period') || '24h';

  // Simulation de données pour la démonstration
  // Dans un environnement réel, ces données viendraient d'une base de données ou d'un service externe
  const dataPoints = period === '24h' ? 24 : period === '7d' ? 168 : 720;
  
  const generateMetrics = (max: number) => {
    return Array.from({ length: dataPoints }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000).toISOString(),
      value: Math.random() * max
    }));
  };

  const data = {
    cpu: generateMetrics(100), // CPU usage en pourcentage
    memory: generateMetrics(16), // Mémoire en GB
    latency: generateMetrics(200), // Latence en ms
    summary: {
      responseTime: Math.round(Math.random() * 150 + 50),
      errorRate: Number((Math.random() * 1).toFixed(2)),
      requestsPerMinute: Math.round(Math.random() * 3000 + 1000),
      availability: Number((99 + Math.random()).toFixed(2))
    }
  };

  return NextResponse.json(data);
}
