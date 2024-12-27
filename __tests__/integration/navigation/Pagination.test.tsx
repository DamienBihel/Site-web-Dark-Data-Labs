import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'
import PaginationSystem from '@/components/navigation/PaginationSystem'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Pagination System Integration', () => {
  const mockRouter = {
    push: jest.fn(),
    query: {},
    pathname: '/products',
  }

  const defaultProps = {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    onPageChange: jest.fn(),
  }

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Tests des limites de pagination', () => {
    it('désactive le bouton précédent sur la première page', () => {
      render(<PaginationSystem {...defaultProps} currentPage={1} />)
      
      const prevButton = screen.getByRole('button', { name: /précédent/i })
      expect(prevButton).toBeDisabled()
    })

    it('désactive le bouton suivant sur la dernière page', () => {
      render(
        <PaginationSystem
          {...defaultProps}
          currentPage={10}
          totalItems={100}
          itemsPerPage={10}
        />
      )
      
      const nextButton = screen.getByRole('button', { name: /suivant/i })
      expect(nextButton).toBeDisabled()
    })

    it('gère correctement le cas de 0 items', () => {
      render(
        <PaginationSystem
          {...defaultProps}
          totalItems={0}
          currentPage={1}
        />
      )
      
      expect(screen.getByText('Page 1 sur 1')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /précédent/i })).toBeDisabled()
      expect(screen.getByRole('button', { name: /suivant/i })).toBeDisabled()
    })
  })

  describe('Tests de navigation entre les pages', () => {
    it('met à jour l\'URL lors du changement de page', async () => {
      render(<PaginationSystem {...defaultProps} />)
      
      const nextButton = screen.getByRole('button', { name: /suivant/i })
      fireEvent.click(nextButton)
      
      expect(mockRouter.push).toHaveBeenCalledWith({
        pathname: '/products',
        query: { page: '2' },
      })
    })

    it('conserve les paramètres de requête existants', async () => {
      mockRouter.query = { search: 'test', page: '1' }
      
      render(<PaginationSystem {...defaultProps} />)
      
      const nextButton = screen.getByRole('button', { name: /suivant/i })
      fireEvent.click(nextButton)
      
      expect(mockRouter.push).toHaveBeenCalledWith({
        pathname: '/products',
        query: { search: 'test', page: '2' },
      })
    })

    it('permet la navigation directe via le sélecteur de page', async () => {
      render(<PaginationSystem {...defaultProps} />)
      
      const pageSelect = screen.getByRole('combobox')
      fireEvent.change(pageSelect, { target: { value: '5' } })
      
      expect(mockRouter.push).toHaveBeenCalledWith({
        pathname: '/products',
        query: { page: '5' },
      })
    })
  })

  describe('Tests des états désactivés', () => {
    it('désactive tous les contrôles pendant le chargement', () => {
      render(<PaginationSystem {...defaultProps} isLoading={true} />)
      
      const prevButton = screen.getByRole('button', { name: /précédent/i })
      const nextButton = screen.getByRole('button', { name: /suivant/i })
      const pageSelect = screen.getByRole('combobox')
      
      expect(prevButton).toBeDisabled()
      expect(nextButton).toBeDisabled()
      expect(pageSelect).toBeDisabled()
    })

    it('affiche un indicateur de chargement', () => {
      render(<PaginationSystem {...defaultProps} isLoading={true} />)
      
      expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
    })
  })

  describe('Tests de mise à jour du contenu', () => {
    it('appelle le callback onPageChange avec la nouvelle page', async () => {
      const onPageChange = jest.fn()
      render(
        <PaginationSystem
          {...defaultProps}
          onPageChange={onPageChange}
        />
      )
      
      const nextButton = screen.getByRole('button', { name: /suivant/i })
      fireEvent.click(nextButton)
      
      expect(onPageChange).toHaveBeenCalledWith(2)
    })

    it('met à jour le résumé de pagination', async () => {
      render(
        <PaginationSystem
          {...defaultProps}
          currentPage={2}
          totalItems={95}
          itemsPerPage={10}
        />
      )
      
      expect(screen.getByText('Affichage 11-20 sur 95')).toBeInTheDocument()
    })
  })

  describe('Tests de responsive design', () => {
    beforeEach(() => {
      // Simuler un écran mobile
      window.innerWidth = 375
      fireEvent(window, new Event('resize'))
    })

    it('adapte l\'interface pour les petits écrans', () => {
      render(<PaginationSystem {...defaultProps} />)
      
      // Vérifier que certains éléments sont masqués sur mobile
      expect(screen.queryByText('Affichage')).not.toBeInTheDocument()
      
      // Vérifier que les contrôles principaux sont toujours présents
      expect(screen.getByRole('button', { name: /précédent/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /suivant/i })).toBeInTheDocument()
    })
  })

  describe('Tests d\'interaction avec les filtres', () => {
    const mockFilters = {
      category: 'test',
      search: 'query'
    }

    it('réinitialise la page lors du changement de filtres', async () => {
      const { rerender } = render(
        <PaginationSystem
          {...defaultProps}
          currentPage={5}
          filters={mockFilters}
        />
      )

      // Simuler un changement de filtres
      rerender(
        <PaginationSystem
          {...defaultProps}
          currentPage={1}
          filters={{ ...mockFilters, category: 'new' }}
        />
      )

      expect(defaultProps.onPageChange).toHaveBeenCalledWith(1)
    })

    it('maintient les filtres lors du changement de page', () => {
      render(
        <PaginationSystem
          {...defaultProps}
          currentPage={1}
          filters={mockFilters}
        />
      )

      const nextButton = screen.getByRole('button', { name: /suivant/i })
      fireEvent.click(nextButton)

      expect(mockRouter.push).toHaveBeenCalledWith({
        pathname: '/products',
        query: { ...mockFilters, page: '2' }
      })
    })

    it('gère correctement la réduction du nombre total de pages', () => {
      const { rerender } = render(
        <PaginationSystem
          {...defaultProps}
          currentPage={10}
          totalItems={100}
        />
      )

      // Simuler une réduction du nombre total d'items
      rerender(
        <PaginationSystem
          {...defaultProps}
          currentPage={5}
          totalItems={50}
        />
      )

      expect(defaultProps.onPageChange).toHaveBeenCalledWith(5)
    })
  })

  describe('Tests de persistance d\'état', () => {
    it('conserve la page courante lors de la navigation', () => {
      const { unmount } = render(
        <PaginationSystem {...defaultProps} currentPage={3} />
      )

      // Simuler une navigation
      unmount()
      render(<PaginationSystem {...defaultProps} currentPage={3} />)

      const pageButtons = screen.getAllByRole('button')
      const currentPageButton = pageButtons.find(button => button.getAttribute('aria-current') === 'page')
      expect(currentPageButton).toHaveTextContent('3')
    })

    it('restaure l\'état après un rafraîchissement', () => {
      mockRouter.query = { page: '4' }
      
      render(<PaginationSystem {...defaultProps} />)
      
      expect(defaultProps.onPageChange).toHaveBeenCalledWith(4)
    })
  })

  describe('Tests de performance', () => {
    it('gère efficacement un grand nombre d\'items', () => {
      const start = performance.now()
      
      render(
        <PaginationSystem
          {...defaultProps}
          totalItems={10000}
          itemsPerPage={20}
        />
      )
      
      const end = performance.now()
      expect(end - start).toBeLessThan(100) // Le rendu doit prendre moins de 100ms
    })

    it('optimise les re-rendus lors des changements de page', () => {
      const { rerender } = render(
        <PaginationSystem {...defaultProps} currentPage={1} />
      )

      const start = performance.now()
      
      rerender(<PaginationSystem {...defaultProps} currentPage={2} />)
      
      const end = performance.now()
      expect(end - start).toBeLessThan(50) // Le re-rendu doit prendre moins de 50ms
    })
  })

  describe('Tests d\'accessibilité', () => {
    it('permet la navigation au clavier', () => {
      render(<PaginationSystem {...defaultProps} />)
      
      const nextButton = screen.getByRole('button', { name: /suivant/i })
      nextButton.focus()
      
      fireEvent.keyDown(nextButton, { key: 'Enter' })
      expect(defaultProps.onPageChange).toHaveBeenCalledWith(2)
    })

    it('fournit des attributs ARIA appropriés', () => {
      render(<PaginationSystem {...defaultProps} />)
      
      const nav = screen.getByRole('navigation')
      expect(nav).toHaveAttribute('aria-label', 'Pagination')
      
      const currentPage = screen.getByRole('button', { current: true })
      expect(currentPage).toHaveAttribute('aria-current', 'page')
    })

    it('maintient un contraste suffisant', () => {
      render(<PaginationSystem {...defaultProps} />)
      
      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        const styles = window.getComputedStyle(button)
        // Vérification basique du contraste - à adapter selon votre design system
        expect(styles.backgroundColor).not.toBe(styles.color)
      })
    })
  })
})
