import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonitoringDashboard from '@/components/monitoring/Dashboard';

describe('MonitoringDashboard', () => {
  it('should render the dashboard title', () => {
    render(<MonitoringDashboard />);
    expect(screen.getByText('Tableau de bord de monitoring')).toBeInTheDocument();
  });

  it('should display performance metrics', () => {
    render(<MonitoringDashboard />);
    expect(screen.getByTestId('performance-metrics')).toBeInTheDocument();
  });

  it('should allow switching between different time periods', () => {
    render(<MonitoringDashboard />);
    const timeSelector = screen.getByTestId('time-period-selector');
    fireEvent.change(timeSelector, { target: { value: '7d' } });
    expect(screen.getByText('7 derniers jours')).toBeInTheDocument();
  });

  it('should enable report export functionality', () => {
    render(<MonitoringDashboard />);
    const exportButton = screen.getByTestId('export-button');
    expect(exportButton).toBeEnabled();
  });
});
