import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useRouter } from 'next/router'
import NavigationSystem from '@/components/navigation/NavigationSystem'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('Navigation System Integration', () => {
  const mockRouter = {
    push: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Navigation principale', () => {
    it('navigue correctement entre les pages principales', async () => {
      render(<NavigationSystem />)
      
      const aboutLink = screen.getByText(/about/i)
      await act(async () => {
        fireEvent.click(aboutLink)
      })
      
      expect(mockRouter.push).toHaveBeenCalledWith('/about')
    })

    it('met à jour correctement l\'état actif des liens', async () => {
      mockRouter.pathname = '/about'
      
      render(<NavigationSystem />)
      
      const aboutLink = screen.getByText(/about/i)
      expect(aboutLink).toHaveClass('active')
    })

    it('gère correctement les liens de navigation dynamiques', async () => {
      const dynamicRoutes = [
        { path: '/products/1', title: 'Product 1' },
        { path: '/products/2', title: 'Product 2' },
      ]
      
      render(<NavigationSystem dynamicRoutes={dynamicRoutes} />)
      
      // Ouvrir le menu des produits
      const productsButton = screen.getByRole('button', { name: /products/i })
      await act(async () => {
        fireEvent.click(productsButton)
      })
      
      // Attendre que les liens soient rendus
      const productLinks = await screen.findAllByText(/product \d/i)
      expect(productLinks).toHaveLength(2)
      
      await act(async () => {
        fireEvent.click(productLinks[0])
      })
      
      expect(mockRouter.push).toHaveBeenCalledWith('/products/1')
    })
  })

  describe('Menu Mobile', () => {
    beforeEach(() => {
      // Mock window.innerWidth pour simuler un écran mobile
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 375
        })
        window.dispatchEvent(new Event('resize'))
      })
    })

    afterEach(() => {
      // Restaurer la taille de l'écran
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: 1024
        })
        window.dispatchEvent(new Event('resize'))
      })
    })

    it('affiche et masque correctement le menu mobile', async () => {
      render(<NavigationSystem />)
      
      // Ouvrir le menu
      const menuButton = screen.getByRole('button', { name: /menu/i })
      await act(async () => {
        fireEvent.click(menuButton)
      })
      
      const menu = screen.getByTestId('mobile-menu')
      expect(menu).toHaveClass('translate-x-0')
      
      // Fermer le menu
      await act(async () => {
        fireEvent.click(menuButton)
      })
      
      expect(menu).toHaveClass('-translate-x-full')
    })

    it('persiste l\'état du menu après navigation', async () => {
      render(<NavigationSystem />)
      
      // Ouvrir le menu mobile
      const menuButton = screen.getByRole('button', { name: /menu/i })
      await act(async () => {
        fireEvent.click(menuButton)
      })
      
      // Vérifier que le menu est ouvert
      const menu = screen.getByTestId('mobile-menu')
      expect(menu).toHaveClass('translate-x-0')
      
      // Naviguer vers une nouvelle page
      const aboutLink = screen.getByText(/about/i)
      await act(async () => {
        fireEvent.click(aboutLink)
      })
      
      // Vérifier que le menu reste ouvert après la navigation
      await waitFor(() => {
        expect(menu).toHaveClass('translate-x-0')
      })
    })

    it('conserve la position de défilement du menu', async () => {
      render(<NavigationSystem />)
      
      // Ouvrir le menu mobile
      const menuButton = screen.getByRole('button', { name: /menu/i })
      await act(async () => {
        fireEvent.click(menuButton)
      })
      
      const menu = screen.getByTestId('mobile-menu')
      
      // Simuler le défilement dans le menu
      await act(async () => {
        Object.defineProperty(menu, 'scrollTop', {
          value: 100,
          writable: true
        })
      })
      
      // Naviguer vers une nouvelle page
      const aboutLink = screen.getByText(/about/i)
      await act(async () => {
        fireEvent.click(aboutLink)
      })
      
      // Vérifier que la position de défilement est conservée
      await waitFor(() => {
        expect(menu.scrollTop).toBe(100)
      })
    })
  })
})
