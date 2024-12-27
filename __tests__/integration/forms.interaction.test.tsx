import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
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
import { Combobox } from '../../components/ui/combobox';

const formSchema = z.object({
  email: z.string().min(1, 'Ce champ est requis').email('Format d\'email invalide'),
  country: z.string().min(1, 'Ce champ est requis'),
  tags: z.array(z.string()).min(1, 'Sélectionnez au moins un tag'),
});

const countries = [
  { label: 'France', value: 'FR' },
  { label: 'États-Unis', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'Royaume-Uni', value: 'GB' },
];

const tags = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Next.js',
  'TailwindCSS',
];

function AdvancedForm({ onSubmit = () => {} }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      country: '',
      tags: [],
    },
  });

  const [countrySearch, setCountrySearch] = React.useState('');
  const [tagInput, setTagInput] = React.useState('');
  const [tagSuggestions, setTagSuggestions] = React.useState<string[]>([]);

  // Filtrer les suggestions de pays
  const filteredCountries = countries.filter(country =>
    country.label.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Filtrer les suggestions de tags
  React.useEffect(() => {
    if (tagInput.length > 0) {
      const suggestions = tags.filter(tag =>
        tag.toLowerCase().includes(tagInput.toLowerCase())
      );
      setTagSuggestions(suggestions);
    } else {
      setTagSuggestions([]);
    }
  }, [tagInput]);

  // Gérer les raccourcis clavier
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + S pour sauvegarder
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        form.handleSubmit(onSubmit)();
      }
      // Échap pour réinitialiser le formulaire
      if (e.key === 'Escape') {
        e.preventDefault();
        form.reset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [form, onSubmit]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  placeholder="exemple@email.com"
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pays</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="text"
                    data-testid="country-input"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && filteredCountries.length > 0) {
                        e.preventDefault();
                        const firstCountry = filteredCountries[0];
                        field.onChange(firstCountry.value);
                        setCountrySearch(firstCountry.label);
                      }
                    }}
                    placeholder="Rechercher un pays"
                    autoComplete="country"
                  />
                  {countrySearch && filteredCountries.length > 0 && (
                    <ul
                      className="absolute z-10 w-full bg-white border rounded-md mt-1"
                      data-testid="country-suggestions"
                    >
                      {filteredCountries.map((country) => (
                        <li
                          key={country.value}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            field.onChange(country.value);
                            setCountrySearch(country.label);
                          }}
                        >
                          {country.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {field.value.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center gap-1"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => {
                            const newTags = [...field.value];
                            newTags.splice(index, 1);
                            field.onChange(newTags);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      data-testid="tag-input"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && tagSuggestions.length > 0) {
                          e.preventDefault();
                          const newTag = tagSuggestions[0];
                          if (!field.value.includes(newTag)) {
                            field.onChange([...field.value, newTag]);
                          }
                          setTagInput('');
                        }
                      }}
                      placeholder="Ajouter des tags"
                    />
                    {tagSuggestions.length > 0 && (
                      <ul
                        className="absolute z-10 w-full bg-white border rounded-md mt-1"
                        data-testid="tag-suggestions"
                      >
                        {tagSuggestions.map((tag) => (
                          <li
                            key={tag}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              if (!field.value.includes(tag)) {
                                field.onChange([...field.value, tag]);
                              }
                              setTagInput('');
                            }}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Envoyer</Button>
      </form>
    </Form>
  );
}

describe('Tests d\'interaction avancée des formulaires', () => {
  describe('Navigation entre les champs', () => {
    it('devrait naviguer entre les champs avec Tab dans le bon ordre', async () => {
      render(<AdvancedForm />);
      
      const emailInput = screen.getByTestId('email-input');
      const countryInput = screen.getByTestId('country-input');
      const tagInput = screen.getByTestId('tag-input');
      const submitButton = screen.getByRole('button', { name: /envoyer/i });

      await userEvent.tab();
      expect(emailInput).toHaveFocus();

      await userEvent.tab();
      expect(countryInput).toHaveFocus();

      await userEvent.tab();
      expect(tagInput).toHaveFocus();

      await userEvent.tab();
      expect(submitButton).toHaveFocus();
    });
  });

  describe('Raccourcis clavier', () => {
    it('devrait soumettre le formulaire avec Ctrl+S', async () => {
      const onSubmit = jest.fn();
      render(<AdvancedForm onSubmit={onSubmit} />);

      // Remplir le formulaire avec des données valides
      await userEvent.type(screen.getByTestId('email-input'), 'test@example.com');
      await userEvent.type(screen.getByTestId('country-input'), 'France');
      await userEvent.click(screen.getByText('France'));
      await userEvent.type(screen.getByTestId('tag-input'), 'React');
      await userEvent.click(screen.getByText('React'));
      
      // Simuler Ctrl+S
      await act(async () => {
        fireEvent.keyDown(window, { key: 's', ctrlKey: true });
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalled();
      });
    });

    it('devrait réinitialiser le formulaire avec Échap', async () => {
      render(<AdvancedForm />);

      const emailInput = screen.getByTestId('email-input');
      await userEvent.type(emailInput, 'test@example.com');

      // Simuler la touche Échap
      await act(async () => {
        fireEvent.keyDown(window, { key: 'Escape' });
      });

      expect(emailInput).toHaveValue('');
    });
  });

  describe('Autocomplétion et suggestions', () => {
    it('devrait afficher et sélectionner les suggestions de pays', async () => {
      render(<AdvancedForm />);

      const countryInput = screen.getByTestId('country-input');
      await userEvent.type(countryInput, 'Fra');

      // Vérifier que les suggestions apparaissent
      const suggestions = await screen.findByTestId('country-suggestions');
      expect(suggestions).toBeInTheDocument();
      expect(screen.getByText('France')).toBeInTheDocument();

      // Sélectionner une suggestion
      await act(async () => {
        await userEvent.click(screen.getByText('France'));
      });

      expect(countryInput).toHaveValue('France');
    });

    it('devrait gérer la sélection des tags avec suggestions', async () => {
      render(<AdvancedForm />);

      const tagInput = screen.getByTestId('tag-input');
      await userEvent.type(tagInput, 'Rea');

      // Vérifier que les suggestions apparaissent
      const suggestions = await screen.findByTestId('tag-suggestions');
      expect(suggestions).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();

      // Sélectionner un tag
      await act(async () => {
        await userEvent.click(screen.getByText('React'));
      });

      const tag = screen.getByText('React');
      expect(tag).toBeInTheDocument();
      expect(tagInput).toHaveValue('');
    });

    it('devrait permettre la suppression des tags', async () => {
      render(<AdvancedForm />);

      // Ajouter un tag
      const tagInput = screen.getByTestId('tag-input');
      await userEvent.type(tagInput, 'React');
      
      await act(async () => {
        await userEvent.click(screen.getByText('React'));
      });

      // Vérifier que le tag est affiché
      const tagElement = screen.getByText('React');
      expect(tagElement).toBeInTheDocument();

      // Trouver et cliquer sur le bouton de suppression
      const closeButton = screen.getByRole('button', { name: '×' });
      
      await act(async () => {
        await userEvent.click(closeButton);
      });

      // Vérifier que le tag a été supprimé
      await waitFor(() => {
        expect(screen.queryByText('React')).not.toBeInTheDocument();
      });
    });
  });
});
