import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Configuration pour le lazy loading
interface LazyLoadConfig {
  ssr?: boolean
  loading?: ComponentType
  threshold?: string
}

// Fonction pour créer un composant avec lazy loading
export function createLazyComponent<T>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  config: LazyLoadConfig = {}
) {
  const {
    ssr = false,
    loading: LoadingComponent,
    threshold = '100px',
  } = config

  return dynamic(importFn, {
    ssr,
    loading: LoadingComponent,
  })
}

// Hook pour l'intersection observer
export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  const { threshold = 0, root = null, rootMargin = '0px' } = options

  return new IntersectionObserver(callback, {
    threshold,
    root,
    rootMargin,
  })
}

// Utilitaire pour optimiser les images
export const optimizeImage = (src: string, width: number, quality = 75) => {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`
}

// Fonction pour débouncer les événements
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// Cache pour les requêtes
const requestCache = new Map<string, any>()

export async function cachedFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const cacheKey = `${url}-${JSON.stringify(options)}`

  if (requestCache.has(cacheKey)) {
    return requestCache.get(cacheKey)
  }

  const response = await fetch(url, options)
  const data = await response.json()
  requestCache.set(cacheKey, data)

  return data
}
