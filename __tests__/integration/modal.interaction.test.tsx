import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../components/ui/button';

// Composant de test
const TestDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Ouvrir Modal</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content aria-modal="true" className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-bold">Test Modal</Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            Description du modal de test
          </Dialog.Description>
          <div className="grid gap-4 py-4">
            <p>Contenu du modal</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="submit">Confirmer</Button>
          </div>
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4" aria-label="Fermer le modal">×</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

describe('Tests d\'Interaction UI - Modales et Dialogues', () => {
  beforeEach(() => {
    render(<TestDialog />);
  });

  test('Le modal devrait être fermé par défaut', () => {
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('Le modal devrait s\'ouvrir au clic sur le déclencheur', async () => {
    const trigger = screen.getByRole('button', { name: /ouvrir modal/i });
    await userEvent.click(trigger);
    
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  test('Le modal devrait se fermer au clic sur le bouton de fermeture', async () => {
    // Ouvrir le modal
    const trigger = screen.getByRole('button', { name: /ouvrir modal/i });
    await userEvent.click(trigger);
    
    // Vérifier que le modal est ouvert
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
    
    // Fermer le modal
    const closeButton = screen.getByRole('button', { name: /fermer le modal/i });
    await userEvent.click(closeButton);
    
    // Vérifier que le modal est fermé
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  test('Le modal devrait se fermer avec la touche Escape', async () => {
    // Ouvrir le modal
    const trigger = screen.getByRole('button', { name: /ouvrir modal/i });
    await userEvent.click(trigger);
    
    // Vérifier que le modal est ouvert
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
    
    // Appuyer sur Escape
    await userEvent.keyboard('{Escape}');
    
    // Vérifier que le modal est fermé
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  test('Le focus devrait être piégé dans le modal', async () => {
    // Ouvrir le modal
    const trigger = screen.getByRole('button', { name: /ouvrir modal/i });
    await userEvent.click(trigger);
    
    // Vérifier que le focus est dans le modal
    const dialog = await screen.findByRole('dialog');
    expect(document.activeElement?.closest('[role="dialog"]')).toBe(dialog);
    
    // Appuyer sur Tab plusieurs fois
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    
    // Le focus devrait rester dans le modal
    expect(document.activeElement?.closest('[role="dialog"]')).toBe(dialog);
  });

  test('Le modal devrait avoir les attributs ARIA appropriés', async () => {
    // Ouvrir le modal
    const trigger = screen.getByRole('button', { name: /ouvrir modal/i });
    await userEvent.click(trigger);
    
    const dialog = await screen.findByRole('dialog');
    
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('role', 'dialog');
    expect(dialog).toHaveAttribute('aria-labelledby');
    expect(dialog).toHaveAttribute('aria-describedby');
  });
});
