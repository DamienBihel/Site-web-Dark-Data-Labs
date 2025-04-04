import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <div className={cn('logo', className)}>Dark Data Labs</div>
)
