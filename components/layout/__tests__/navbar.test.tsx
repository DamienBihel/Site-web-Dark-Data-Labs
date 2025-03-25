/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import { Navbar } from '../navbar'

// Mock next/link et next/navigation
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  )
})

jest.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

// Mock lib/utils
jest.mock('@/lib/utils', () => ({
  cn: (...args: any[]) => args.join(' ')
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    header: ({ children, className, ...props }: any) => (
      <header data-testid="motion-header" className={className} {...props}>
        {children}
      </header>
    ),
    div: ({ children, className, ...props }: any) => (
      <div data-testid="motion-div" className={className} {...props}>
        {children}
      </div>
    )
  }
}))

// Mock les composants UI
jest.mock('../../shared/ui/button', () => ({
  Button: ({ children, ...props }: any) => (
    <button data-testid="button" {...props}>{children}</button>
  )
}))

jest.mock('../../shared/ui/sheet', () => ({
  Sheet: ({ children }: any) => <div data-testid="sheet">{children}</div>,
  SheetTrigger: ({ children }: any) => <button data-testid="sheet-trigger">{children}</button>,
  SheetContent: ({ children }: any) => <div data-testid="sheet-content">{children}</div>
}))

jest.mock('../../shared/ui/scroll-area', () => ({
  ScrollArea: ({ children }: any) => <div data-testid="scroll-area">{children}</div>
}))

jest.mock('../../shared/ui/logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>
}))

// Mock les composants de navigation
jest.mock('@/components/core/navigation/NavigationMenu', () => ({
  NavigationMenu: ({ children }: any) => <nav data-testid="navigation-menu">{children}</nav>,
  NavigationMenuList: ({ children }: any) => <ul data-testid="navigation-menu-list">{children}</ul>,
  NavigationMenuItem: ({ children }: any) => <li data-testid="navigation-menu-item">{children}</li>,
  NavigationMenuTrigger: ({ children }: any) => <button data-testid="navigation-menu-trigger">{children}</button>,
  NavigationMenuContent: ({ children }: any) => <div data-testid="navigation-menu-content">{children}</div>,
  NavigationMenuLink: ({ children }: any) => <a data-testid="navigation-menu-link">{children}</a>,
  navigationMenuTriggerStyle: () => ''
}))

// Mock lucide-react
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu Icon</div>,
  ChevronDown: () => <div data-testid="chevron-down">Chevron Down</div>
}))

describe('Navbar Component', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
    // Reset window scroll position
    global.window.scrollY = 0
  })

  beforeEach(() => {
    render(<Navbar />)
  })

  it('renders the logo', () => {
    const nextLinks = screen.getAllByTestId('next-link')
    expect(nextLinks.length).toBeGreaterThan(0)
    
    const darkText = screen.getByText('DARK')
    expect(darkText).toBeInTheDocument()
    
    const dataLabsText = screen.getByText('DATA LABS')
    expect(dataLabsText).toBeInTheDocument()
  })

  it('renders the site name', () => {
    const darkText = screen.getByText('DARK')
    const dataLabsText = screen.getByText('DATA LABS')
    expect(darkText).toBeInTheDocument()
    expect(dataLabsText).toBeInTheDocument()
  })

  it('renders all main navigation items', () => {
    const navigationMenu = screen.getByTestId('navigation-menu')
    expect(navigationMenu).toBeInTheDocument()

    const menuItems = screen.getAllByTestId('navigation-menu-item')
    expect(menuItems).toHaveLength(5)

    const menuLinks = screen.getAllByTestId('navigation-menu-link')
    expect(menuLinks).toHaveLength(5)
  })

  it('renders navigation menu content', () => {
    const menuItems = screen.getAllByTestId('navigation-menu-item')
    expect(menuItems).toHaveLength(5)

    const menuLinks = screen.getAllByTestId('navigation-menu-link')
    expect(menuLinks).toHaveLength(5)
  })

  it('renders navigation links', () => {
    const links = screen.getAllByTestId('next-link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders the contact link', () => {
    const contactLink = screen.getByRole('link', { name: /réserver un audit gratuit/i })
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  describe('Accessibility', () => {
    it('supports keyboard navigation', () => {
      const menuLinks = screen.getAllByTestId('navigation-menu-link')
      menuLinks.forEach(link => {
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('tabindex', '0')
        fireEvent.keyDown(link, { key: 'Enter' })
      })
    })

    it('provides appropriate ARIA labels', () => {
      const menuLinks = screen.getAllByTestId('navigation-menu-link')
      menuLinks.forEach(link => {
        expect(link).toHaveAttribute('aria-label')
      })
    })
  })

  describe('Scroll Behavior', () => {
    it('adds background class on scroll', () => {
      window.scrollY = 100
      fireEvent.scroll(window)
      const header = screen.getByTestId('motion-header')
      expect(header).toHaveClass('bg-background/95')
    })

    it('removes background class when scrolled to top', () => {
      window.scrollY = 0
      fireEvent.scroll(window)
      const header = screen.getByTestId('motion-header')
      expect(header).toHaveClass('bg-transparent')
    })
  })
})
