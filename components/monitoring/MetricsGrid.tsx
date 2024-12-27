import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricsSummary } from '@/services/MonitoringService';

interface MetricsGridProps {
  timePeriod: string;
  metrics: MetricsSummary;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ timePeriod, metrics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Temps de réponse moyen</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.responseTime}ms</p>
          <p className="text-xs text-muted-foreground">-5% vs période précédente</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Taux d'erreur</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.errorRate}%</p>
          <p className="text-xs text-muted-foreground">+0.1% vs période précédente</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Requêtes par minute</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.requestsPerMinute}</p>
          <p className="text-xs text-muted-foreground">+12% vs période précédente</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Disponibilité</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{metrics.availability}%</p>
          <p className="text-xs text-muted-foreground">Stable vs période précédente</p>
        </CardContent>
      </Card>
    </div>
  );
};
