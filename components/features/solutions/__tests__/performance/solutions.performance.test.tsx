import { render, screen, act } from '@testing-library/react'
import { SolutionsSection } from '../../SolutionsSection'
import { SolutionDetail } from '../../SolutionDetail'
import { PricingCard } from '../../pricing-card'
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
    it('should render SolutionsSection within performance budget', async () => {
      const renderTime = await measureRenderTime(SolutionsSection)
      
      // Le budget de temps de rendu est de 100ms
      expect(renderTime).toBeLessThan(100)
      
      // Vérifier que tous les éléments sont rendus
      expect(screen.getAllByTestId('solution-card')).toHaveLength(2)
    })

    it('should render SolutionDetail efficiently with many features', async () => {
      const manyFeatures = Array(20).fill(null).map((_, i) => ({
        title: `Feature ${i}`,
        description: `Description ${i}`
      }))

      const props = {
        title: 'Test Solution',
        description: 'Test Description',
        benefits: Array(10).fill('Benefit'),
        features: manyFeatures,
        technologies: Array(10).fill('Tech')
      }

      const renderTime = await measureRenderTime(SolutionDetail, props)
      
      // Même avec beaucoup de contenu, le rendu devrait rester rapide
      expect(renderTime).toBeLessThan(150)
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
          roi: '300%',
          ideal: 'Test Market',
          index: i
        }
        
        renderTimes.push(await measureRenderTime(PricingCard, props))
      }
      
      // Vérifier que le temps de rendu reste constant
      const averageTime = renderTimes.reduce((a, b) => a + b) / renderTimes.length
      renderTimes.forEach(time => {
        expect(Math.abs(time - averageTime)).toBeLessThan(20)
      })
    })
  })

  describe('Memory Usage', () => {
    it('should maintain stable memory usage during repeated renders', async () => {
      const initialMemory = measureMemoryUsage()
      
      // Effectuer plusieurs rendus
      for (let i = 0; i < 10; i++) {
        render(<SolutionsSection />)
      }
      
      const finalMemory = measureMemoryUsage()
      
      // La différence d'utilisation de la mémoire heap ne devrait pas être excessive
      expect(finalMemory.heapUsed - initialMemory.heapUsed).toBeLessThan(5 * 1024 * 1024) // 5MB
    })
  })

  describe('Animation Performance', () => {
    it('should handle multiple concurrent animations efficiently', async () => {
      const startTime = performance.now()
      
      render(
        <>
          {Array(5).fill(null).map((_, i) => (
            <PricingCard
              key={i}
              name={`Pack ${i}`}
              price="999"
              description="Description"
              features={['Feature 1', 'Feature 2']}
              roi="300%"
              ideal="Test Market"
              index={i}
            />
          ))}
        </>
      )
      
      const animationTime = performance.now() - startTime
      
      // Les animations ne devraient pas bloquer le rendu
      expect(animationTime).toBeLessThan(50)
    })
  })

  describe('Lazy Loading', () => {
    it('should defer loading of non-critical content', async () => {
      const intersectionObserverMock = () => ({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
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
    it('should optimize resource loading order', async () => {
      const resourceTimings: PerformanceResourceTiming[] = []
      const observer = new PerformanceObserver((list) => {
        resourceTimings.push(...list.getEntries() as PerformanceResourceTiming[])
      })
      
      observer.observe({ entryTypes: ['resource'] })
      
      render(<SolutionsSection />)
      
      // Vérifier que les ressources critiques sont chargées en premier
      const criticalResources = resourceTimings.filter(
        resource => resource.initiatorType === 'script' || resource.initiatorType === 'css'
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
