/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent } from '@testing-library/react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '../NavigationMenu'
import { cn } from '@/lib/utils'

// Mock des dépendances externes
jest.mock('@radix-ui/react-navigation-menu', () => ({
  Root: ({ children, className }: any) => (
    <div data-testid="nav-root" className={className}>{children}</div>
  ),
  List: ({ children, className }: any) => (
    <ul data-testid="nav-list" className={className}>{children}</ul>
  ),
  Item: ({ children }: any) => (
    <li data-testid="nav-item">{children}</li>
  ),
  Trigger: ({ children, className, onPointerEnter, onPointerLeave }: any) => (
    <button 
      data-testid="nav-trigger" 
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </button>
  ),
  Content: ({ children, className }: any) => (
    <div data-testid="nav-content" className={className}>{children}</div>
  ),
  Link: ({ children, className, asChild }: any) => (
    <a data-testid="nav-link" className={className}>{children}</a>
  ),
  Viewport: ({ className }: any) => (
    <div data-testid="nav-viewport" className={className} />
  ),
  Indicator: ({ className }: any) => (
    <div data-testid="nav-indicator" className={className} />
  )
}))

// Mock de Lucide React
jest.mock('lucide-react', () => ({
  ChevronDown: () => <svg data-testid="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7"/></svg>
}))

describe('NavigationMenu Components', () => {
  describe('NavigationMenu', () => {
    it('renders with correct base classes', () => {
      render(
        <NavigationMenu>
          <span>Test Content</span>
        </NavigationMenu>
      )
      const root = screen.getByTestId('nav-root')
      expect(root).toHaveClass(
        'relative',
        'z-10',
        'flex',
        'max-w-max',
        'flex-1',
        'items-center',
        'justify-center'
      )
    })

    it('applies custom className', () => {
      const customClass = 'custom-class'
      render(
        <NavigationMenu className={customClass}>
          <span>Test Content</span>
        </NavigationMenu>
      )
      expect(screen.getByTestId('nav-root')).toHaveClass(customClass)
    })

    it('renders viewport', () => {
      render(
        <NavigationMenu>
          <span>Test Content</span>
        </NavigationMenu>
      )
      expect(screen.getByTestId('nav-viewport')).toBeInTheDocument()
    })
  })

  describe('NavigationMenuList', () => {
    it('renders with correct base classes', () => {
      render(
        <NavigationMenuList>
          <span>Test Items</span>
        </NavigationMenuList>
      )
      const list = screen.getByTestId('nav-list')
      expect(list).toHaveClass(
        'group',
        'flex',
        'flex-1',
        'list-none',
        'items-center',
        'justify-center',
        'space-x-1'
      )
    })

    it('applies custom className', () => {
      const customClass = 'custom-list-class'
      render(
        <NavigationMenuList className={customClass}>
          <span>Test Items</span>
        </NavigationMenuList>
      )
      expect(screen.getByTestId('nav-list')).toHaveClass(customClass)
    })
  })

  describe('NavigationMenuTrigger', () => {
    it('renders with correct base classes and icon', () => {
      render(
        <NavigationMenuTrigger>
          Menu Item
        </NavigationMenuTrigger>
      )
      const trigger = screen.getByTestId('nav-trigger')
      expect(trigger).toHaveClass(
        'group',
        'inline-flex',
        'h-10',
        'w-max',
        'items-center',
        'justify-center',
        'rounded-md',
        'bg-background',
        'px-4',
        'py-2',
        'text-sm',
        'font-medium'
      )
      expect(screen.getByTestId('chevron-icon')).toBeInTheDocument()
    })

    it('handles pointer events', () => {
      const onPointerEnter = jest.fn()
      const onPointerLeave = jest.fn()
      render(
        <NavigationMenuTrigger
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          Menu Item
        </NavigationMenuTrigger>
      )
      const trigger = screen.getByTestId('nav-trigger')
      
      fireEvent.pointerEnter(trigger)
      expect(onPointerEnter).toHaveBeenCalled()
      
      fireEvent.pointerLeave(trigger)
      expect(onPointerLeave).toHaveBeenCalled()
    })
  })

  describe('NavigationMenuContent', () => {
    it('renders with correct base classes', () => {
      render(
        <NavigationMenuContent>
          Content
        </NavigationMenuContent>
      )
      const content = screen.getByTestId('nav-content')
      expect(content).toHaveClass(
        'left-0',
        'top-0',
        'w-full',
        'md:absolute',
        'md:w-auto'
      )
    })

    it('applies animation classes', () => {
      render(
        <NavigationMenuContent>
          Content
        </NavigationMenuContent>
      )
      const content = screen.getByTestId('nav-content')
      expect(content).toHaveClass(
        'data-[motion^=from-]:animate-in',
        'data-[motion^=to-]:animate-out'
      )
    })
  })

  describe('NavigationMenuLink', () => {
    it('renders with custom className', () => {
      const customClass = 'custom-link-class'
      render(
        <NavigationMenuLink className={customClass}>
          Link Text
        </NavigationMenuLink>
      )
      expect(screen.getByTestId('nav-link')).toHaveClass(customClass)
    })

    it('renders children correctly', () => {
      render(
        <NavigationMenuLink>
          <span>Link Content</span>
        </NavigationMenuLink>
      )
      expect(screen.getByText('Link Content')).toBeInTheDocument()
    })
  })

  describe('navigationMenuTriggerStyle', () => {
    it('returns correct className string', () => {
      const className = navigationMenuTriggerStyle()
      expect(className).toContain('group')
      expect(className).toContain('inline-flex')
      expect(className).toContain('h-10')
      expect(className).toContain('w-max')
      expect(className).toContain('items-center')
      expect(className).toContain('justify-center')
      expect(className).toContain('rounded-md')
      expect(className).toContain('bg-background')
    })
  })
})
