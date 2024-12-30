import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BaseComponentProps } from '../component.config'

interface ComponentNameProps extends BaseComponentProps {
  // Add specific props here
}

export function ComponentName({
  className,
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ComponentNameProps) {
  return (
    <motion.div
      className={cn(
        'component-base-style',
        {
          'size-sm': size === 'sm',
          'size-md': size === 'md',
          'size-lg': size === 'lg',
        },
        {
          'variant-primary': variant === 'primary',
          'variant-secondary': variant === 'secondary',
          'variant-tertiary': variant === 'tertiary',
        },
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
