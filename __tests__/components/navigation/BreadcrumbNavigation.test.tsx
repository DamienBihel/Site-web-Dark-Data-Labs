import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { useRouter } from 'next/router'
import BreadcrumbNavigation from '@/components/navigation/BreadcrumbNavigation'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('BreadcrumbNavigation', () => {
  const mockRouter = {
    push: jest.fn(),
    asPath: '/',
    pathname: '/',
    query: {},
  }

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter)
    // Réinitialiser la largeur de l'écran à desktop par défaut
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Formatage des segments', () => {
    it('formate correctement les labels des segments avec tirets', () => {
      mockRouter.asPath = '/products/new-arrivals/special-offers'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('New Arrivals')).toBeInTheDocument()
      expect(screen.getByText('Special Offers')).toBeInTheDocument()
    })

    it('gère correctement les segments sans tirets', () => {
      mockRouter.asPath = '/products/category/subcategory'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
    })
  })

  describe('Gestion responsive', () => {
    it('affiche tous les segments sur desktop', () => {
      mockRouter.asPath = '/products/category/subcategory/item'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
      expect(screen.getByText('Item')).toBeInTheDocument()
      expect(screen.queryByText('...')).not.toBeInTheDocument()
    })

    it('affiche une version condensée sur mobile avec plus de 2 segments', () => {
      // Simuler un écran mobile
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 375,
        })
        window.dispatchEvent(new Event('resize'))
      })

      mockRouter.asPath = '/products/category/subcategory/item'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('...')).toBeInTheDocument()
      expect(screen.getByText('Item')).toBeInTheDocument()
      expect(screen.queryByText('Category')).not.toBeInTheDocument()
    })

    it('affiche tous les segments sur mobile avec 2 segments ou moins', () => {
      // Simuler un écran mobile
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 375,
        })
        window.dispatchEvent(new Event('resize'))
      })

      mockRouter.asPath = '/products'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.queryByText('...')).not.toBeInTheDocument()
    })
  })

  describe('Navigation et états des liens', () => {
    it('désactive la navigation pour le dernier segment', () => {
      mockRouter.asPath = '/products/category'
      
      render(<BreadcrumbNavigation />)
      
      const lastSegment = screen.getByText('Category')
      expect(lastSegment.closest('a')).toHaveAttribute('aria-disabled', 'true')
      expect(lastSegment.closest('a')).toHaveClass('pointer-events-none')
    })

    it('permet la navigation pour les segments non-finaux', () => {
      mockRouter.asPath = '/products/category/item'
      
      render(<BreadcrumbNavigation />)
      
      const middleSegment = screen.getByText('Category')
      fireEvent.click(middleSegment)
      
      expect(mockRouter.push).toHaveBeenCalledWith('/products/category')
    })

    it('applique les styles corrects aux segments actifs et inactifs', () => {
      mockRouter.asPath = '/products/category'
      
      render(<BreadcrumbNavigation />)
      
      const activeSegment = screen.getByText('Category')
      const inactiveSegment = screen.getByText('Products')
      
      expect(activeSegment.closest('a')).toHaveClass('text-foreground')
      expect(inactiveSegment.closest('a')).toHaveClass('text-muted-foreground')
    })
  })

  describe('Gestion des événements de redimensionnement', () => {
    it('met à jour correctement l\'affichage lors du redimensionnement', () => {
      mockRouter.asPath = '/products/category/subcategory'
      
      render(<BreadcrumbNavigation />)
      
      // Vérifier l'affichage initial en mode desktop
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
      
      // Simuler un redimensionnement vers mobile
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 375,
        })
        window.dispatchEvent(new Event('resize'))
      })
      
      // Vérifier l'affichage en mode mobile
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('...')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
      expect(screen.queryByText('Category')).not.toBeInTheDocument()
      
      // Simuler un retour en mode desktop
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 1024,
        })
        window.dispatchEvent(new Event('resize'))
      })
      
      // Vérifier que tous les segments sont à nouveau visibles
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
      expect(screen.queryByText('...')).not.toBeInTheDocument()
    })

    it('nettoie correctement les event listeners au démontage', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
      
      const { unmount } = render(<BreadcrumbNavigation />)
      unmount()
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    })
  })

  describe('Cas particuliers de navigation', () => {
    it('gère correctement les segments avec caractères spéciaux', () => {
      mockRouter.asPath = '/products/été-2024/promos-&-offres'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('Été 2024')).toBeInTheDocument()
      expect(screen.getByText('Promos & Offres')).toBeInTheDocument()
    })

    it('gère correctement les segments avec nombres', () => {
      mockRouter.asPath = '/products/category-2/item-123'
      
      render(<BreadcrumbNavigation />)
      
      expect(screen.getByText('Category 2')).toBeInTheDocument()
      expect(screen.getByText('Item 123')).toBeInTheDocument()
    })

    it('gère correctement les segments vides ou invalides', () => {
      mockRouter.asPath = '/products//category'
      
      render(<BreadcrumbNavigation />)
      
      const items = screen.getAllByRole('listitem')
      expect(items).toHaveLength(3) // Home + Products + Category (ignore empty segment)
    })
  })
})
