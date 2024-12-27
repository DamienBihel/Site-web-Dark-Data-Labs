import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'
import Breadcrumb from '@/components/navigation/Breadcrumb'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Breadcrumb Integration', () => {
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

  describe('Mise à jour automatique', () => {
    it('met à jour automatiquement le breadcrumb lors du changement de route', async () => {
      mockRouter.asPath = '/products/category/item'
      
      render(<Breadcrumb />)
      
      const breadcrumbItems = screen.getAllByRole('listitem')
      expect(breadcrumbItems).toHaveLength(4) // Home + Products + Category + Item
      
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Item')).toBeInTheDocument()
    })

    it('gère correctement les routes avec des query params', async () => {
      mockRouter.asPath = '/products/search?query=test'
      mockRouter.query = { query: 'test' }
      
      render(<Breadcrumb />)
      
      const breadcrumbItems = screen.getAllByRole('listitem')
      expect(breadcrumbItems).toHaveLength(3) // Home + Products + Search
      
      // Les query params ne devraient pas apparaître dans le breadcrumb
      expect(screen.queryByText('test')).not.toBeInTheDocument()
    })
  })

  describe('Navigation via Breadcrumb', () => {
    it('permet la navigation en cliquant sur les éléments du breadcrumb', async () => {
      mockRouter.asPath = '/products/category/item'
      
      render(<Breadcrumb />)
      
      const productsLink = screen.getByText('Products')
      fireEvent.click(productsLink)
      
      expect(mockRouter.push).toHaveBeenCalledWith('/products')
    })

    it('désactive le dernier élément du breadcrumb', () => {
      mockRouter.asPath = '/products/category'
      
      render(<Breadcrumb />)
      
      const lastItem = screen.getByText('Category')
      expect(lastItem.closest('a')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('Affichage des séparateurs', () => {
    it('affiche correctement les séparateurs entre les éléments', () => {
      mockRouter.asPath = '/products/category'
      
      render(<Breadcrumb />)
      
      const separators = screen.getAllByTestId('breadcrumb-separator')
      expect(separators).toHaveLength(2) // Entre Home-Products et Products-Category
    })

    it('applique le style correct aux séparateurs', () => {
      mockRouter.asPath = '/products/category'
      
      render(<Breadcrumb />)
      
      const separators = screen.getAllByTestId('breadcrumb-separator')
      separators.forEach(separator => {
        expect(separator).toHaveClass('text-gray-400')
      })
    })
  })

  describe('Gestion des cas spéciaux', () => {
    it('gère correctement les routes dynamiques avec des slugs', async () => {
      mockRouter.asPath = '/blog/2023/mon-article'
      mockRouter.query = { year: '2023', slug: 'mon-article' }
      
      render(<Breadcrumb />)
      
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('2023')).toBeInTheDocument()
      expect(screen.getByText('Mon Article')).toBeInTheDocument() // Formaté pour l'affichage
    })

    it('tronque les breadcrumbs trop longs sur mobile', async () => {
      // Simuler un écran mobile
      window.innerWidth = 375
      fireEvent(window, new Event('resize'))
      
      mockRouter.asPath = '/products/category/subcategory/item'
      
      render(<Breadcrumb />)
      
      const ellipsis = screen.getByText('...')
      expect(ellipsis).toBeInTheDocument()
      
      // Vérifier que seuls le début et la fin du breadcrumb sont visibles
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Item')).toBeInTheDocument()
    })
  })
})
