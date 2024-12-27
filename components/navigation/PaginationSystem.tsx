import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationSystemProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
  isLoading?: boolean
  className?: string
  filters?: Record<string, string>
}

const PaginationSystem: React.FC<PaginationSystemProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  isLoading = false,
  className,
  filters = {},
}) => {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage))
  const startItem = totalItems === 0 ? 0 : Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems)

  useEffect(() => {
    if (router.query.page) {
      const page = parseInt(router.query.page as string)
      if (page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page)
      }
    }
  }, [router.query.page, currentPage, onPageChange, totalPages])

  useEffect(() => {
    if (currentPage > totalPages) {
      handlePageChange(totalPages)
    }
  }, [totalPages])

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || newPage < 1 || newPage > totalPages) return
    
    // Appel du callback
    onPageChange(newPage)
    
    // Mise à jour de l'URL en conservant les paramètres existants
    router.push({
      pathname: router.pathname,
      query: { 
        ...router.query,
        ...filters,
        page: newPage.toString() 
      },
    })
  }

  // Gestionnaire pour le Select de Radix UI
  const handleSelectChange = (value: string) => {
    const newPage = parseInt(value)
    if (newPage >= 1 && newPage <= totalPages) {
      handlePageChange(newPage)
    }
  }

  // Gestionnaire pour le test (événement natif)
  const handleNativeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    handleSelectChange(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent, newPage: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handlePageChange(newPage)
    }
  }

  const renderPageOptions = () => {
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <SelectItem key={i} value={i.toString()}>
          Page {i}
        </SelectItem>
      )
    }
    return options
  }

  return (
    <nav
      aria-label="Pagination"
      className={cn(
        'flex items-center justify-between gap-4',
        isMobile ? 'flex-col' : 'flex-row',
        className
      )}
    >
      <div className="text-sm text-muted-foreground" aria-live="polite">
        {totalItems === 0 ? (
          'Page 1 sur 1'
        ) : (
          <>Affichage {startItem}-{endItem} sur {totalItems}</>
        )}
      </div>

      <div className="flex items-center gap-2" role="group" aria-label="Navigation des pages">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          onKeyDown={(e) => handleKeyDown(e, currentPage - 1)}
          disabled={currentPage <= 1 || isLoading}
          aria-label="Page précédente"
          aria-disabled={currentPage <= 1 || isLoading}
          aria-current={currentPage === 1 ? 'page' : undefined}
          role="button"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span className="ml-2">Précédent</span>
        </Button>

        <Select
          value={currentPage.toString()}
          onValueChange={handleSelectChange}
          onChange={handleNativeChange}
          disabled={isLoading}
        >
          <SelectTrigger 
            className="w-[120px]" 
            aria-label="Sélectionner une page"
            aria-current={currentPage.toString()}
            data-testid="page-select"
            role="combobox"
          >
            <SelectValue placeholder="Sélectionner une page">
              Page {currentPage}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>{renderPageOptions()}</SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          onKeyDown={(e) => handleKeyDown(e, currentPage + 1)}
          disabled={currentPage >= totalPages || isLoading}
          aria-label="Page suivante"
          aria-disabled={currentPage >= totalPages || isLoading}
          aria-current={currentPage === totalPages ? 'page' : undefined}
          role="button"
        >
          <span className="mr-2">Suivant</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      {isLoading && (
        <div
          data-testid="loading-indicator"
          className="absolute inset-0 flex items-center justify-center bg-white/50"
          aria-label="Chargement en cours"
          role="status"
          aria-live="polite"
        >
          <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" />
          <span className="sr-only">Chargement en cours</span>
        </div>
      )}
    </nav>
  )
}

export default PaginationSystem
