import React from 'react'
import { cn } from '@/lib/utils'

interface SheetProps {
  children: React.ReactNode
  className?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: 'top' | 'right' | 'bottom' | 'left'
}

interface SheetTriggerProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Sheet: React.FC<SheetProps> = ({ 
  children, 
  className,
  open,
  onOpenChange,
  side = 'right'
}) => (
  <div 
    className={cn('sheet', className)}
    data-state={open ? 'open' : 'closed'}
    data-side={side}
  >
    {children}
  </div>
)

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ 
  children, 
  className,
  asChild 
}) => (
  <button 
    className={cn('sheet-trigger', className)} 
    aria-label="Toggle Menu"
    data-state={asChild ? 'asChild' : 'default'}
  >
    {children}
  </button>
)

export const SheetContent: React.FC<SheetProps> = ({ 
  children, 
  className,
  side = 'right'
}) => (
  <div 
    className={cn('sheet-content', className)}
    data-side={side}
  >
    {children}
  </div>
)

export const SheetTitle: React.FC<SheetProps> = ({ children, className }) => (
  <h2 className={cn('sheet-title', className)}>{children}</h2>
)
