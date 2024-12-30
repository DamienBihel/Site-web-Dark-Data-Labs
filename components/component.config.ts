// Configuration des composants
export const componentConfig = {
  // Préfixes standards pour les types de composants
  prefixes: {
    page: 'Page',
    layout: 'Layout',
    feature: 'Feature',
    ui: 'UI',
    form: 'Form',
  },

  // Templates de props standards
  propTemplates: {
    className: 'string',
    children: 'React.ReactNode',
    variant: 'string',
    size: "'sm' | 'md' | 'lg'",
  },

  // Configuration du lazy loading
  lazyLoading: {
    enabled: true,
    threshold: '100px',
    fallback: '<div>Loading...</div>',
  },

  // Configuration des animations
  animations: {
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
    },
    slideIn: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 },
      transition: { duration: 0.3 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
  },
}

// Types standards pour les composants
export type ComponentSize = 'sm' | 'md' | 'lg'
export type ComponentVariant = 'primary' | 'secondary' | 'tertiary'

// Interface de base pour les composants
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  variant?: ComponentVariant
  size?: ComponentSize
}
