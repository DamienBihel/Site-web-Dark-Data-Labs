import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart } from "@/components/ui/charts/LineChart";
import { MetricsGrid } from "./MetricsGrid";
import { fetchMetrics, MetricsResponse } from "@/services/MonitoringService";
import { Loader2 } from "lucide-react";

const MonitoringDashboard: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState('24h');
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMetrics(timePeriod);
        setMetrics(data);
      } catch (err) {
        setError('Erreur lors du chargement des métriques');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMetrics();
  }, [timePeriod]);

  const handleExport = () => {
    if (!metrics) return;
    
    const jsonString = JSON.stringify(metrics, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `metrics-${timePeriod}-${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tableau de bord de monitoring</h1>
        <div className="flex gap-4">
          <Select value={timePeriod} onValueChange={setTimePeriod} data-testid="time-period-selector">
            <SelectTrigger>
              <SelectValue placeholder="Période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">24 dernières heures</SelectItem>
              <SelectItem value="7d">7 derniers jours</SelectItem>
              <SelectItem value="30d">30 derniers jours</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleExport} data-testid="export-button" disabled={!metrics}>
            Exporter le rapport
          </Button>
        </div>
      </div>

      {metrics && (
        <>
          <div data-testid="performance-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance CPU</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={metrics.cpu}
                  xAxis="timestamp"
                  yAxis="value"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Utilisation Mémoire</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={metrics.memory}
                  xAxis="timestamp"
                  yAxis="value"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Latence Réseau</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={metrics.latency}
                  xAxis="timestamp"
                  yAxis="value"
                />
              </CardContent>
            </Card>
          </div>

          <MetricsGrid metrics={metrics.summary} timePeriod={timePeriod} />
        </>
      )}
    </div>
  );
};

export default MonitoringDashboard;
