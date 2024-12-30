import { type ClassValue } from 'clsx'

export const cn = (...inputs: ClassValue[]) => inputs.filter(Boolean).join(' ')
