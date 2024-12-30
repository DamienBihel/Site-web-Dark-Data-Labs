/// <reference types="@testing-library/jest-dom" />
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Footer } from '../Footer'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  )
})

describe('Footer Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders without crashing', () => {
    render(<Footer />)
    expect(screen.getByText(/Dark Data Labs/)).toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-footer-class'
    render(<Footer className={customClass} />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain(customClass)
  })

  it('has correct base styling classes', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-background')
    expect(footer.className).toContain('border-t')
  })

  describe('Content Structure', () => {
    beforeEach(() => {
      render(<Footer />)
    })

    it('renders all section headings', () => {
      expect(screen.getByText('À propos')).toBeInTheDocument()
      expect(screen.getByText('Services')).toBeInTheDocument()
      expect(screen.getByText('Ressources')).toBeInTheDocument()
      expect(screen.getByText('Légal')).toBeInTheDocument()
    })

    it('renders navigation links', () => {
      expect(screen.getByText('Notre histoire')).toBeInTheDocument()
      expect(screen.getByText('Analyse de données')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('Confidentialité')).toBeInTheDocument()
    })

    it('renders copyright notice with current year', () => {
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`© ${currentYear} Dark Data Labs`))).toBeInTheDocument()
    })
  })

  describe('Navigation and Interaction', () => {
    it('all links are clickable and have correct hrefs', () => {
      render(<Footer />)
      const links = screen.getAllByTestId('next-link')
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
        fireEvent.click(link)
      })
    })

    it('links have hover states', () => {
      render(<Footer />)
      const links = screen.getAllByTestId('next-link')
      
      links.forEach(link => {
        expect(link.className).toContain('hover:opacity-80')
      })
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      render(<Footer />)
    })

    it('uses semantic HTML structure', () => {
      expect(screen.getAllByRole('list')).toHaveLength(3)
      expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    })

    it('has accessible link text', () => {
      const links = screen.getAllByTestId('next-link')
      links.forEach(link => {
        expect(link).toHaveAccessibleName()
      })
    })

    it('has proper heading hierarchy', () => {
      const headings = screen.getAllByRole('heading')
      headings.forEach(heading => {
        expect(heading).toHaveAttribute('aria-level')
      })
    })

    it('has sufficient color contrast', () => {
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('text-foreground')
    })

    it('has proper landmark roles', () => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
      const nav = screen.getAllByRole('navigation')
      expect(nav.length).toBeGreaterThan(0)
    })

    it('supports keyboard navigation', () => {
      const links = screen.getAllByTestId('next-link')
      links.forEach(link => {
        link.focus()
        expect(document.activeElement).toBe(link)
      })
    })
  })

  describe('Social Links', () => {
    beforeEach(() => {
      render(<Footer />)
    })

    it('renders social media links', () => {
      const socialLinks = screen.getAllByRole('link', { name: /linkedin|twitter|github/i })
      expect(socialLinks.length).toBeGreaterThan(0)
    })

    it('social links have proper icons', () => {
      const socialIcons = screen.getAllByTestId(/social-icon/i)
      expect(socialIcons.length).toBeGreaterThan(0)
    })

    it('social links open in new tab safely', () => {
      const socialLinks = screen.getAllByRole('link', { name: /linkedin|twitter|github/i })
      socialLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })
  })

  describe('Responsive Design', () => {
    it('has responsive layout classes', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer.className).toContain('grid')
      expect(footer.className).toContain('gap-8')
    })

    it('maintains proper spacing on different viewports', () => {
      render(<Footer />)
      const sections = screen.getAllByRole('list')
      sections.forEach(section => {
        expect(section.className).toContain('space-y-2')
      })
    })
  })
})
