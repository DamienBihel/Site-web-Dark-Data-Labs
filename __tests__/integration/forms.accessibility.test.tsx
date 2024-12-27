import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React from 'react';
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

expect.extend(toHaveNoViolations);

const formSchema = z.object({
  email: z.string().min(1, 'Ce champ est requis').email('Format d\'email invalide'),
  name: z.string().min(1, 'Ce champ est requis'),
});

function AccessibleForm({ onSubmit = () => {} }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
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
      <form 
        onSubmit={form.handleSubmit(handleSubmit)} 
        className="space-y-4"
        noValidate
        aria-label="Formulaire de contact"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="text" 
                  data-testid="name-input"
                  aria-required="true"
                  aria-invalid={form.formState.errors.name ? "true" : "false"}
                />
              </FormControl>
              <FormMessage role="alert" aria-live="polite" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email" 
                  data-testid="email-input"
                  aria-required="true"
                  aria-invalid={form.formState.errors.email ? "true" : "false"}
                />
              </FormControl>
              <FormMessage role="alert" aria-live="polite" />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </Button>
      </form>
    </Form>
  );
}

describe('Tests d\'accessibilité des formulaires', () => {
  it('ne devrait avoir aucune violation d\'accessibilité', async () => {
    const { container } = render(<AccessibleForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  describe('Navigation au clavier', () => {
    it('devrait permettre la navigation entre les champs avec la touche Tab', async () => {
      render(<AccessibleForm />);
      
      const nameInput = screen.getByTestId('name-input');
      const emailInput = screen.getByTestId('email-input');
      const submitButton = screen.getByRole('button');

      // Vérifie que les éléments sont focusables dans le bon ordre
      await userEvent.tab();
      expect(nameInput).toHaveFocus();

      await userEvent.tab();
      expect(emailInput).toHaveFocus();

      await userEvent.tab();
      expect(submitButton).toHaveFocus();
    });
  });

  describe('Attributs ARIA', () => {
    it('devrait avoir les attributs ARIA appropriés pour les champs requis', () => {
      render(<AccessibleForm />);
      
      const nameInput = screen.getByTestId('name-input');
      const emailInput = screen.getByTestId('email-input');

      expect(nameInput).toHaveAttribute('aria-required', 'true');
      expect(emailInput).toHaveAttribute('aria-required', 'true');
    });

    it('devrait mettre à jour aria-invalid lors de la validation', async () => {
      render(<AccessibleForm />);
      
      const emailInput = screen.getByTestId('email-input');
      
      // Initialement, pas d'erreur
      expect(emailInput).toHaveAttribute('aria-invalid', 'false');

      // Saisie d'un email invalide
      await userEvent.type(emailInput, 'email-invalide');
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(emailInput).toHaveAttribute('aria-invalid', 'true');
      });
    });

    it('devrait avoir des messages d\'erreur accessibles', async () => {
      render(<AccessibleForm />);
      
      const emailInput = screen.getByTestId('email-input');
      
      // Déclenche une erreur
      await userEvent.type(emailInput, 'email-invalide');
      fireEvent.blur(emailInput);

      await waitFor(() => {
        const errorMessage = screen.getByText('Format d\'email invalide');
        expect(errorMessage).toHaveAttribute('role', 'alert');
        expect(errorMessage).toHaveAttribute('aria-live', 'polite');
      });
    });
  });

  describe('États de chargement', () => {
    it('devrait indiquer l\'état de chargement de manière accessible', async () => {
      const onSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 1000)));
      render(<AccessibleForm onSubmit={onSubmit} />);

      // Remplit le formulaire avec des données valides
      await userEvent.type(screen.getByTestId('name-input'), 'John Doe');
      await userEvent.type(screen.getByTestId('email-input'), 'john@example.com');

      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(submitButton).toHaveAttribute('aria-busy', 'true');
        expect(submitButton).toHaveTextContent('Envoi en cours...');
      });

      await waitFor(() => {
        expect(submitButton).toHaveAttribute('aria-busy', 'false');
        expect(submitButton).toHaveTextContent('Envoyer');
      }, { timeout: 2000 });
    });
  });
});
