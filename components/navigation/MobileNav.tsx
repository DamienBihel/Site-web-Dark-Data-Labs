import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useOptimizedAnimation } from '@/hooks/useOptimizedAnimation';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { isMobile } = useDeviceDetect();
  const { isLowPowerMode } = useMobileOptimization();
  const animation = useOptimizedAnimation({
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      
      // Seuil de défilement pour le comportement de masquage
      const threshold = 50;

      if (Math.abs(scrollDelta) < threshold) return;

      // Masquer la barre de navigation lors du défilement vers le bas
      // Afficher lors du défilement vers le haut
      setIsVisible(scrollDelta < 0 || currentScrollY < threshold);
      setLastScrollY(currentScrollY);
    };

    const optimizedScroll = isLowPowerMode
      ? handleScroll // Version simple pour le mode économie d'énergie
      : debounce(handleScroll, 16); // ~60fps pour le mode normal

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, [lastScrollY, isMobile, isLowPowerMode]);

  const navStyle = {
    transform: `translateY(${isVisible ? '0' : '-100%'})`,
    transition: animation.enabled
      ? `transform ${animation.optimizedDuration}ms ${animation.optimizedEasing}`
      : 'none',
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b"
      style={navStyle}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Dark Data Labs
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

// Utilitaire pour limiter la fréquence d'appel d'une fonction
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
