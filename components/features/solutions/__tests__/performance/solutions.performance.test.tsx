import { render, screen, act } from '@testing-library/react'
import { SolutionsSection } from '../../solutions-section'
import { SolutionDetail } from '@/components/features/solutions/solution-detail'
import { PricingCard } from '@/components/features/solutions/pricing-card'
import { PerformanceObserver, performance } from 'perf_hooks'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>
  }
}))

// Utilitaire pour mesurer le temps de rendu
const measureRenderTime = async (Component: React.ComponentType<any>, props = {}) => {
  const startTime = performance.now()
  
  await act(async () => {
    render(<Component {...props} />)
  })
  
  return performance.now() - startTime
}

// Utilitaire pour mesurer l'utilisation de la mémoire
const measureMemoryUsage = () => {
  if (global.gc) {
    global.gc()
  }
  return process.memoryUsage()
}

describe('Solutions Performance Tests', () => {
  describe('Render Performance', () => {
    it('should render SolutionsSection within performance budget', () => {
      const startTime = performance.now()
      
      render(<SolutionsSection />)
      
      const renderTime = performance.now() - startTime
      
      // Vérifier que le temps de rendu est inférieur à 1000ms
      expect(renderTime).toBeLessThan(1000)
      
      // Vérifier que les cartes sont rendues
      const solutionCards = screen.getAllByTestId('solution-card')
      expect(solutionCards).toHaveLength(3)
    })

    it('should render SolutionDetail efficiently with many features', async () => {
      const props = {
        title: 'Test Solution',
        description: 'Test Description',
        price: '999',
        features: Array(20).fill('Feature'),
        demoProject: {
          title: 'Test Project',
          points: Array(10).fill('Point'),
          roi: '150%'
        },
        targetAudience: Array(10).fill('Audience'),
        href: '/solutions/test'
      }

      const renderTime = await measureRenderTime(SolutionDetail, props)
      
      // Même avec beaucoup de contenu, le rendu devrait rester rapide
      expect(renderTime).toBeLessThan(300)
    })

    it('should render multiple PricingCards efficiently', async () => {
      const renderTimes: number[] = []
      
      // Tester le rendu de plusieurs cartes
      for (let i = 0; i < 5; i++) {
        const props = {
          name: `Pack ${i}`,
          price: '999',
          description: 'Description',
          features: ['Feature 1', 'Feature 2'],
          demoProject: {
            title: 'Test Project',
            points: ['Point 1', 'Point 2'],
            roi: '150%'
          },
          targetAudience: ['Audience 1', 'Audience 2'],
          index: i,
          href: `/solutions/pack-${i}`
        }
        
        renderTimes.push(await measureRenderTime(PricingCard, props))
      }
      
      // Vérifier que le temps de rendu reste constant
      const averageTime = renderTimes.reduce((a, b) => a + b) / renderTimes.length
      renderTimes.forEach(time => {
        expect(Math.abs(time - averageTime)).toBeLessThan(50)
      })
    })
  })

  describe('Memory Usage', () => {
    it('should maintain stable memory usage during repeated renders', () => {
      // Capturer l'utilisation de la mémoire initiale
      const initialMemory = process.memoryUsage().heapUsed
      
      // Effectuer plusieurs rendus
      for (let i = 0; i < 10; i++) {
        const { unmount } = render(<SolutionsSection />)
        unmount()
      }
      
      // Capturer l'utilisation de la mémoire finale
      const finalMemory = process.memoryUsage().heapUsed
      
      // Vérifier que la différence de mémoire est inférieure à 15MB
      const memoryDiff = (finalMemory - initialMemory) / 1024 / 1024 // Convertir en MB
      expect(memoryDiff).toBeLessThan(15)
    })
  })

  describe('Animation Performance', () => {
    it('should handle multiple concurrent animations efficiently', () => {
      const startTime = performance.now()
      
      render(<SolutionsSection />)
      
      // Simuler plusieurs animations simultanées
      const animatedElements = document.querySelectorAll('[data-motion]')
      animatedElements.forEach(element => {
        element.dispatchEvent(new Event('animationstart'))
        element.dispatchEvent(new Event('animationend'))
      })
      
      const animationTime = performance.now() - startTime
      expect(animationTime).toBeLessThan(100)
    })
  })

  describe('Lazy Loading', () => {
    it('should defer loading of non-critical content', () => {
      // Mock IntersectionObserver
      const intersectionObserverMock = jest.fn((callback) => {
        callback([{ isIntersecting: true }])
        return {
          observe: jest.fn(),
          unobserve: jest.fn(),
          disconnect: jest.fn()
        }
      })
      window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock)
      
      render(<SolutionsSection />)
      
      // Vérifier que les images sont chargées avec lazy loading
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('loading', 'lazy')
      })
    })
  })

  describe('Resource Loading', () => {
    it('should optimize resource loading order', () => {
      const resourceTimings: PerformanceResourceTiming[] = []
      const observer = new PerformanceObserver((list) => {
        resourceTimings.push(...list.getEntries() as PerformanceResourceTiming[])
      })
      observer.observe({ entryTypes: ['resource'] })
      
      render(<SolutionsSection />)
      
      // Vérifier que les ressources critiques sont chargées en premier
      const criticalResources = resourceTimings.filter(
        entry => entry.initiatorType === 'script' || entry.initiatorType === 'css'
      )
      
      criticalResources.forEach(resource => {
        expect(resource.startTime).toBeLessThan(100)
      })
      
      observer.disconnect()
    })
  })

  describe('Re-render Performance', () => {
    it('should handle prop updates efficiently', async () => {
      const { rerender } = render(
        <PricingCard
          name="Pack 1"
          price="999"
          description="Description"
          features={['Feature 1']}
          roi="300%"
          ideal="Test Market"
          index={0}
        />
      )
      
      const startTime = performance.now()
      
      // Simuler plusieurs mises à jour de props
      for (let i = 0; i < 10; i++) {
        rerender(
          <PricingCard
            name="Pack 1"
            price={(999 + i).toString()}
            description="Description"
            features={['Feature 1']}
            roi="300%"
            ideal="Test Market"
            index={0}
          />
        )
      }
      
      const updateTime = performance.now() - startTime
      
      // Les mises à jour devraient être rapides
      expect(updateTime / 10).toBeLessThan(10) // Moyenne de 10ms par mise à jour
    })
  })
})
