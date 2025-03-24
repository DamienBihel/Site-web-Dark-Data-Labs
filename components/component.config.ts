// Configuration des composants
import { type ReactNode } from 'react'

export type ComponentSize = 'sm' | 'md' | 'lg'
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
  variant?: ComponentVariant
  size?: ComponentSize
}
