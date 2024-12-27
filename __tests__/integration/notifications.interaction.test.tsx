import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useToast } from '../../components/ui/use-toast';
import { Toaster } from '../../components/ui/toaster';
import { Button } from '../../components/ui/button';

// Composant de test pour les notifications
const TestNotifications = () => {
  const { toast } = useToast();

  const showSuccessToast = () => {
    toast({
      title: "Succès",
      description: "Opération réussie",
      className: "bg-green-500",
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Erreur",
      description: "Une erreur est survenue",
      variant: "destructive",
    });
  };

  const showMultipleToasts = () => {
    toast({
      title: "Notification 1",
      description: "Description de la notification 1",
    });
    
    setTimeout(() => {
      toast({
        title: "Notification 2",
        description: "Description de la notification 2",
      });
    }, 500);
    
    setTimeout(() => {
      toast({
        title: "Notification 3",
        description: "Description de la notification 3",
      });
    }, 1000);
  };

  const showLongDurationToast = () => {
    toast({
      title: "Notification longue",
      description: "Cette notification reste affichée plus longtemps",
      duration: 5000,
    });
  };

  return (
    <div>
      <Button onClick={showSuccessToast} data-testid="success-button">
        Afficher succès
      </Button>
      <Button onClick={showErrorToast} data-testid="error-button">
        Afficher erreur
      </Button>
      <Button onClick={showMultipleToasts} data-testid="multiple-button">
        Afficher plusieurs
      </Button>
      <Button onClick={showLongDurationToast} data-testid="duration-button">
        Notification longue
      </Button>
      <Toaster />
    </div>
  );
};

describe('Tests d\'Interaction - Notifications', () => {
  beforeEach(() => {
    render(<TestNotifications />);
  });

  test('Devrait afficher un toast de succès', async () => {
    const user = userEvent.setup();
    const successButton = screen.getByTestId('success-button');
    await user.click(successButton);

    const toast = await screen.findByRole('status');
    expect(toast).toHaveTextContent('Succès');
    expect(toast).toHaveTextContent('Opération réussie');
    expect(toast).toHaveClass('bg-green-500');
  });

  test('Devrait afficher un toast d\'erreur', async () => {
    const user = userEvent.setup();
    const errorButton = screen.getByTestId('error-button');
    await user.click(errorButton);

    const toasts = await screen.findAllByRole('status');
    const toast = toasts.find(t => t.classList.contains('destructive'));
    expect(toast).toBeDefined();
    expect(toast).toHaveTextContent('Erreur');
    expect(toast).toHaveTextContent('Une erreur est survenue');
    expect(toast).toHaveClass('destructive');
  });

  test('Devrait gérer plusieurs toasts en file d\'attente', async () => {
    const user = userEvent.setup();
    const multipleButton = screen.getByTestId('multiple-button');
    await user.click(multipleButton);

    // Vérifier que le premier toast apparaît
    await waitFor(async () => {
      const toasts = screen.queryAllByRole('status');
      const mainToasts = toasts.filter(t => t.tagName.toLowerCase() === 'li');
      expect(mainToasts.length).toBeGreaterThan(0);
      expect(mainToasts[0]).toHaveTextContent('Notification');
    });
  });

  test('Les toasts devraient avoir les attributs ARIA appropriés', async () => {
    const user = userEvent.setup();
    const successButton = screen.getByTestId('success-button');
    await user.click(successButton);

    const toasts = await screen.findAllByRole('status');
    const toast = toasts.find(t => t.tagName.toLowerCase() === 'li');
    expect(toast).toBeDefined();
    expect(toast).toHaveAttribute('aria-atomic', 'true');
  });

  test('Les toasts d\'erreur devraient avoir les bons attributs', async () => {
    const user = userEvent.setup();
    const errorButton = screen.getByTestId('error-button');
    await user.click(errorButton);

    const toasts = await screen.findAllByRole('status');
    const toast = toasts.find(t => t.classList.contains('destructive'));
    expect(toast).toBeDefined();
    expect(toast).toHaveAttribute('aria-atomic', 'true');
    expect(toast).toHaveClass('destructive');
  });
});
