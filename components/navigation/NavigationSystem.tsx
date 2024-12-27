import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './navigation-menu'

interface Route {
  path: string
  title: string
}

interface NavigationSystemProps {
  dynamicRoutes?: Route[]
}

const NavigationSystem: React.FC<NavigationSystemProps> = ({ dynamicRoutes = [] }) => {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const handleNavigation = (path: string) => {
    if (path === router.pathname) return

    try {
      router.push(path)
    } catch (error) {
      console.error('Navigation error:', error)
      router.push('/404')
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActiveLink = (path: string) => {
    return router.pathname === path
  }

  if (router.pathname === '/404') {
    return <div>Page Not Found</div>
  }

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          aria-label="menu"
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      )}

      <nav
        className={`${
          isMobile
            ? `fixed top-0 left-0 w-full h-full bg-white transform ${
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
              } transition-transform duration-200 ease-in-out`
            : ''
        }`}
        data-testid="mobile-menu"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={isActiveLink('/') ? 'active' : ''}
                onClick={() => handleNavigation('/')}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            {dynamicRoutes.length > 0 && (
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {dynamicRoutes.map((route, index) => (
                    <NavigationMenuLink
                      key={index}
                      href={route.path}
                      className={isActiveLink(route.path) ? 'active' : ''}
                      onClick={() => handleNavigation(route.path)}
                    >
                      {route.title}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={isActiveLink('/about') ? 'active' : ''}
                onClick={() => handleNavigation('/about')}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  )
}

export default NavigationSystem
