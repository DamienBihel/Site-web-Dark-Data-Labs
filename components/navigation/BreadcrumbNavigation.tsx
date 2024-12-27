import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { cn } from "@/lib/utils"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from './Breadcrumb'

interface BreadcrumbSegment {
  label: string
  href: string
  isLast: boolean
}

const BreadcrumbNavigation: React.FC = () => {
  const router = useRouter()
  const [segments, setSegments] = useState<BreadcrumbSegment[]>([])
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

  useEffect(() => {
    const path = router.asPath.split('?')[0] // Ignore query parameters
    const pathSegments = path.split('/').filter(Boolean)

    const newSegments: BreadcrumbSegment[] = [
      { label: 'Home', href: '/', isLast: pathSegments.length === 0 },
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Formater le label pour l'affichage
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      newSegments.push({
        label,
        href: currentPath,
        isLast: index === pathSegments.length - 1,
      })
    })

    setSegments(newSegments)
  }, [router.asPath])

  const handleNavigation = (href: string, isLast: boolean) => {
    if (!isLast) {
      router.push(href)
    }
  }

  const renderFullBreadcrumb = () => (
    <BreadcrumbList>
      {segments.map((segment, index) => (
        <React.Fragment key={segment.href}>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={segment.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavigation(segment.href, segment.isLast)
              }}
              aria-disabled={segment.isLast}
              className={cn(
                segment.isLast && "text-foreground pointer-events-none",
                !segment.isLast && "text-muted-foreground"
              )}
            >
              {segment.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {!segment.isLast && (
            <BreadcrumbSeparator data-testid="breadcrumb-separator" />
          )}
        </React.Fragment>
      ))}
    </BreadcrumbList>
  )

  const renderMobileBreadcrumb = () => {
    if (segments.length <= 2) return renderFullBreadcrumb()

    const firstSegment = segments[0]
    const lastSegment = segments[segments.length - 1]

    return (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={firstSegment.href}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation(firstSegment.href, firstSegment.isLast)
            }}
            className="text-muted-foreground"
          >
            {firstSegment.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator data-testid="breadcrumb-separator" />
        <BreadcrumbItem>
          <span className="text-muted-foreground">...</span>
        </BreadcrumbItem>
        <BreadcrumbSeparator data-testid="breadcrumb-separator" />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={lastSegment.href}
            aria-disabled={true}
            className="text-foreground pointer-events-none"
          >
            {lastSegment.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    )
  }

  return (
    <Breadcrumb>
      {isMobile ? renderMobileBreadcrumb() : renderFullBreadcrumb()}
    </Breadcrumb>
  )
}

export default BreadcrumbNavigation
