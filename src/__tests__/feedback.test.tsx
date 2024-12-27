import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import App from '../App';

describe('Tests de Feedback', () => {
  describe('Tests de Toast', () => {
    test('Affichage du toast', async () => {
      render(<App />);
      
      // Déclenche une action qui montre un toast
      fireEvent.click(screen.getByTestId('show-toast-button'));
      
      // Vérifie que le toast est visible
      expect(screen.getByTestId('toast')).toBeInTheDocument();
      expect(screen.getByTestId('toast')).toBeVisible();
    });

    test('Disparition automatique du toast', async () => {
      jest.useFakeTimers();
      render(<App />);
      
      // Déclenche le toast
      fireEvent.click(screen.getByTestId('show-toast-button'));
      
      // Vérifie que le toast est présent
      expect(screen.getByTestId('toast')).toBeInTheDocument();
      
      // Avance le temps de 3 secondes
      act(() => {
        jest.advanceTimersByTime(3000);
      });
      
      // Vérifie que le toast a disparu
      await waitFor(() => {
        expect(screen.queryByTestId('toast')).not.toBeInTheDocument();
      });
      
      jest.useRealTimers();
    });

    test('File d\'attente des toasts', async () => {
      render(<App />);
      
      // Déclenche plusieurs toasts
      fireEvent.click(screen.getByTestId('show-toast-button'));
      fireEvent.click(screen.getByTestId('show-toast-button'));
      fireEvent.click(screen.getByTestId('show-toast-button'));
      
      // Attend que les styles soient appliqués
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
      });
      
      // Vérifie que tous les toasts sont visibles
      const toasts = screen.getAllByTestId('toast');
      expect(toasts).toHaveLength(3);
      
      // Vérifie que le conteneur de virtualisation est présent
      const container = screen.getByTestId('virtual-toast-container');
      expect(container).toBeInTheDocument();
      expect(container).toHaveStyle('max-height: 320px'); // 5 * 64px
      
      // Vérifie que la liste virtuelle est présente
      const virtualList = screen.getByTestId('virtual-toast-list');
      expect(virtualList).toBeInTheDocument();
      
      // Vérifie que chaque toast a les bons attributs
      toasts.forEach(toast => {
        expect(toast).toHaveAttribute('role', 'alert');
        expect(toast).toHaveAttribute('aria-live', 'polite');
      });
    });

    test('Animation des toasts', async () => {
      jest.useFakeTimers();
      
      // Mock requestAnimationFrame
      const originalRaf = window.requestAnimationFrame;
      const mockRaf = jest.fn();
      window.requestAnimationFrame = mockRaf;
      
      render(<App />);
      
      // Déclenche un toast
      await act(async () => {
        fireEvent.click(screen.getByTestId('show-toast-button'));
      });
      
      // Vérifie que le toast est visible initialement
      const toast = screen.getByTestId('toast');
      expect(toast).toBeInTheDocument();
      
      // Avance le temps pour déclencher l'animation de sortie
      await act(async () => {
        jest.advanceTimersByTime(3000);
      });
      
      // Simule les frames d'animation
      await act(async () => {
        for (let i = 0; i < 10; i++) {
          const callback = mockRaf.mock.calls[i]?.[0];
          if (callback) {
            callback(performance.now() + i * 100);
          }
          mockRaf.mock.calls.length = 0;
        }
      });
      
      // Vérifie que le toast n'est plus dans le document
      expect(screen.queryByTestId('toast')).not.toBeInTheDocument();
      
      jest.useRealTimers();
      window.requestAnimationFrame = originalRaf;
    });
  });

  describe('Tests d\'Alertes', () => {
    test('Affichage des différents types d\'alertes', async () => {
      render(<App />);
      
      // Test des différents types d'alertes
      ['success', 'warning', 'error', 'info'].forEach(type => {
        fireEvent.click(screen.getByTestId(`show-alert-${type}`));
        
        const alert = screen.getByTestId(`alert-${type}`);
        expect(alert).toBeInTheDocument();
        expect(alert).toHaveStyle({
          background: type === 'success' ? '#4caf50' :
                     type === 'warning' ? '#ff9800' :
                     type === 'error' ? '#f44336' : '#2196f3'
        });
      });
    });

    test('Fermeture d\'une alerte', async () => {
      render(<App />);
      
      // Affiche une alerte
      fireEvent.click(screen.getByTestId('show-alert-info'));
      const alert = screen.getByTestId('alert-info');
      
      // Clique sur le bouton de fermeture
      fireEvent.click(screen.getByTestId('alert-close-button'));
      
      // Vérifie que l'alerte est fermée
      await waitFor(() => {
        expect(alert).not.toBeInTheDocument();
      });
    });

    test('Alerte avec actions', async () => {
      const onAction = jest.fn();
      render(<App onAlertAction={onAction} />);
      
      // Affiche une alerte avec action
      fireEvent.click(screen.getByTestId('show-alert-action'));
      
      // Clique sur le bouton d'action
      const actionButton = screen.getByTestId('alert-action-button');
      fireEvent.click(actionButton);
      
      // Vérifie que l'action a été appelée
      await waitFor(() => {
        expect(onAction).toHaveBeenCalled();
      });
    });
  });

  describe('Tests d\'Accessibilité', () => {
    test('Focus sur les boutons d\'action', async () => {
      render(<App />);
      
      // Affiche une alerte avec action
      fireEvent.click(screen.getByTestId('show-alert-action'));
      
      // Vérifie que le bouton d'action est focusable
      const actionButton = screen.getByTestId('alert-action-button');
      actionButton.focus();
      expect(actionButton).toHaveFocus();
    });

    test('Navigation au clavier', async () => {
      const user = userEvent.setup();
      render(<App />);
      
      // Affiche plusieurs alertes
      fireEvent.click(screen.getByTestId('show-alert-info'));
      fireEvent.click(screen.getByTestId('show-alert-warning'));
      
      // Attend que les alertes soient rendues
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Focus directement sur le premier bouton
      const buttons = screen.getAllByTestId('alert-close-button');
      buttons[0].focus();
      expect(buttons[0]).toHaveFocus();
      
      // Simule la touche Tab
      await user.tab();
      expect(buttons[1]).toHaveFocus();
    });

    test('Attributs ARIA appropriés', async () => {
      render(<App />);
      
      // Affiche une alerte
      fireEvent.click(screen.getByTestId('show-alert-error'));
      
      const alert = screen.getByTestId('alert-error');
      expect(alert).toHaveAttribute('role', 'alert');
      expect(alert).toHaveAttribute('aria-live', 'assertive');
    });
  });

  describe('Tests de Persistance', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    test('Persistance des alertes importantes', async () => {
      const { rerender } = render(<App />);
      
      // Affiche une alerte importante
      fireEvent.click(screen.getByTestId('show-alert-important'));
      
      // Force le remontage du composant
      rerender(<App />);
      
      // Vérifie que l'alerte importante est toujours présente
      expect(screen.getByTestId('alert-warning')).toBeInTheDocument();
      expect(screen.getByText('Important alert')).toBeInTheDocument();
    });

    test('Restauration de l\'état des alertes', async () => {
      const { unmount } = render(<App />);
      
      // Affiche une alerte et interagit avec
      fireEvent.click(screen.getByTestId('show-alert-action'));
      fireEvent.click(screen.getByTestId('alert-action-button'));
      
      // Démonte le composant
      unmount();
      
      // Remonte le composant avec un nouveau rendu
      render(<App />);
      
      // Vérifie que l'état de l'alerte est restauré
      expect(screen.queryByTestId('alert-action')).not.toBeInTheDocument();
    });
  });
});
