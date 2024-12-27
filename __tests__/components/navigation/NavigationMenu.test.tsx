import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/navigation/navigation-menu'

describe('NavigationMenu', () => {
  const mockItems = [
    {
      trigger: 'Products',
      content: [
        { title: 'Product 1', href: '/product1' },
        { title: 'Product 2', href: '/product2' },
      ],
    },
    {
      trigger: 'About',
      href: '/about',
    },
  ]

  it('renders navigation menu with all items', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          {mockItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.content ? (
                <>
                  <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.content.map((subItem, subIndex) => (
                      <NavigationMenuLink key={subIndex} href={subItem.href}>
                        {subItem.title}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink href={item.href}>
                  {item.trigger}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('shows dropdown content when trigger is clicked', async () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/product1">Product 1</NavigationMenuLink>
              <NavigationMenuLink href="/product2">Product 2</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    const trigger = screen.getByText('Products')
    fireEvent.click(trigger)
    
    expect(await screen.findByText('Product 1')).toBeInTheDocument()
    expect(await screen.findByText('Product 2')).toBeInTheDocument()
  })

  it('supports keyboard focus', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/product1">Product 1</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    const trigger = screen.getByText('Products')
    trigger.focus()
    
    // Test keyboard focus
    expect(document.activeElement).toBe(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })
})
