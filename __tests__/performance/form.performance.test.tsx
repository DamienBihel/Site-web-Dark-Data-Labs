import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { performance } from 'perf_hooks';
import { useForm } from 'react-hook-form';
import { Form } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

// Composant de test
const TestForm = () => {
  const form = useForm();
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <Input 
          type="email"
          aria-label="email"
          {...form.register('email')}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

describe('Tests de Performance des Formulaires', () => {
  // Test du temps de réponse de validation
  test('Le temps de validation du formulaire devrait être inférieur à 100ms', async () => {
    render(<TestForm />);
    const input = screen.getByRole('textbox', { name: /email/i });
    
    const startTime = performance.now();
    await act(async () => {
      fireEvent.change(input, { target: { value: 'test@example.com' } });
    });
    const endTime = performance.now();
    
    const validationTime = endTime - startTime;
    expect(validationTime).toBeLessThan(100); // 100ms maximum
  });

  // Test de la réactivité des champs
  test('La saisie dans les champs devrait être réactive (< 50ms)', async () => {
    render(<TestForm />);
    const input = screen.getByRole('textbox', { name: /email/i });
    
    const times: number[] = [];
    for (let i = 0; i < 10; i++) {
      const startTime = performance.now();
      await act(async () => {
        fireEvent.change(input, { target: { value: `test${i}@example.com` } });
      });
      const endTime = performance.now();
      times.push(endTime - startTime);
    }
    
    const averageTime = times.reduce((a, b) => a + b) / times.length;
    expect(averageTime).toBeLessThan(50); // 50ms maximum en moyenne
  });

  // Test de la gestion de grands volumes de données
  test('Devrait gérer efficacement un grand volume de données (< 200ms)', async () => {
    const TestFormWithOptions = () => {
      const form = useForm();
      const options = Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        value: `Option ${i}`,
      }));
      
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <select {...form.register('largeSelect')}>
              {options.map(option => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </form>
        </Form>
      );
    };
    
    const startTime = performance.now();
    render(<TestFormWithOptions />);
    const endTime = performance.now();
    
    const renderTime = endTime - startTime;
    expect(renderTime).toBeLessThan(200); // 200ms maximum pour le rendu
  });
});
