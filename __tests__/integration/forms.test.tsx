import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import React from 'react';

const formSchema = z.object({
  email: z.string().min(1, 'Ce champ est requis').email('Format d\'email invalide'),
});

function TestForm({ onSubmit = () => {} }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" data-testid="email-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>Envoyer</Button>
      </form>
    </Form>
  );
}

describe('Tests d\'intégration des formulaires', () => {
  describe('Validation des formulaires', () => {
    it('devrait afficher les messages d\'erreur pour les champs requis non remplis', async () => {
      const onSubmit = jest.fn();
      
      render(<TestForm onSubmit={onSubmit} />);

      const emailInput = screen.getByTestId('email-input');
      fireEvent.focus(emailInput);
      fireEvent.blur(emailInput);
      
      await waitFor(() => {
        expect(screen.getByText('Ce champ est requis')).toBeInTheDocument();
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('devrait valider le format d\'email en temps réel', async () => {
      const onSubmit = jest.fn();
      
      render(<TestForm onSubmit={onSubmit} />);

      const emailInput = screen.getByTestId('email-input');
      await userEvent.type(emailInput, 'email-invalide');
      fireEvent.blur(emailInput);
      
      await waitFor(() => {
        expect(screen.getByText('Format d\'email invalide')).toBeInTheDocument();
      });
    });
  });

  describe('Soumission des formulaires', () => {
    it('devrait soumettre le formulaire avec succès avec des données valides', async () => {
      const onSubmit = jest.fn();
      const validEmail = 'test@example.com';
      
      render(<TestForm onSubmit={onSubmit} />);

      const emailInput = screen.getByTestId('email-input');
      await userEvent.type(emailInput, validEmail);
      
      fireEvent.click(screen.getByText('Envoyer'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            email: validEmail
          })
        );
      });
    });

    it('devrait désactiver le bouton de soumission pendant le traitement', async () => {
      const onSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 1000)));
      
      render(<TestForm onSubmit={onSubmit} />);

      const emailInput = screen.getByTestId('email-input');
      await userEvent.type(emailInput, 'test@example.com');
      
      const submitButton = screen.getByText('Envoyer');
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(submitButton).toHaveAttribute('disabled');
      });
      
      await waitFor(() => {
        expect(submitButton).not.toHaveAttribute('disabled');
      }, { timeout: 2000 });
    });
  });
});
