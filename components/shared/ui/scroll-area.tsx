import React from 'react'
import { cn } from '@/lib/utils'

interface ScrollAreaProps {
  children: React.ReactNode
  className?: string
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ children, className }) => (
  <div className={cn('scroll-area', className)}>{children}</div>
)
