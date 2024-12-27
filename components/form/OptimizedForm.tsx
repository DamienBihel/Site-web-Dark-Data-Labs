import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useOptimizedAnimation } from '@/hooks/useOptimizedAnimation';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import debounce from 'lodash/debounce';

interface OptimizedFormProps<T extends z.ZodType> {
  schema: T;
  onSubmit: (values: z.infer<T>) => Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export function OptimizedForm<T extends z.ZodType>({
  schema,
  onSubmit,
  children,
  className = '',
}: OptimizedFormProps<T>) {
  const { isLowPowerMode } = useMobileOptimization();
  const { isMobile } = useDeviceDetect();
  const animation = useOptimizedAnimation({
    duration: 150,
    easing: 'ease-out',
  });

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    mode: isLowPowerMode ? 'onSubmit' : 'onChange',
  });

  // Optimisation de la validation en temps réel
  const optimizedValidation = useCallback(
    debounce((value: any, field: string) => {
      form.trigger(field as any);
    }, isMobile ? 500 : 200),
    [form]
  );

  // Gestionnaire de changement optimisé
  const handleFieldChange = (field: string) => (value: any) => {
    form.setValue(field as any, value);
    if (!isLowPowerMode) {
      optimizedValidation(value, field);
    }
  };

  const formStyle = {
    transition: animation.enabled
      ? `opacity ${animation.optimizedDuration}ms ${animation.optimizedEasing}`
      : 'none',
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
        style={formStyle}
      >
        {typeof children === 'function'
          ? children({ form, handleFieldChange })
          : children}
        
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full mt-4"
        >
          {form.formState.isSubmitting ? 'Envoi...' : 'Envoyer'}
        </Button>
      </form>
    </Form>
  );
}

// Exemple d'utilisation :
/*
const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

<OptimizedForm
  schema={formSchema}
  onSubmit={async (values) => {
    await submitForm(values);
  }}
>
  {({ form, handleFieldChange }) => (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => handleFieldChange('email')(e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Autres champs de formulaire *//*}
    </>
  )}
</OptimizedForm>
*/
