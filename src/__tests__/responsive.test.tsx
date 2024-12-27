import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import App from '../App';

// Fonction utilitaire pour redimensionner la fenêtre
const resizeWindow = (width: number, height: number) => {
  global.window.innerWidth = width;
  global.window.innerHeight = height;
  global.dispatchEvent(new Event('resize'));
};

describe('Responsive Design Tests', () => {
  beforeEach(() => {
    // Reset la taille de la fenêtre avant chaque test
    resizeWindow(1920, 1080);
  });

  describe('Navigation Tests', () => {
    test('Menu devient burger sur mobile', async () => {
      render(<App />);
      
      // Test en mode desktop
      expect(screen.queryByTestId('burger-menu')).not.toBeInTheDocument();
      
      // Simule un écran mobile
      act(() => {
        resizeWindow(375, 667);
      });
      
      expect(screen.getByTestId('burger-menu')).toBeInTheDocument();
    });

    test('Navigation reste accessible sur mobile', async () => {
      render(<App />);
      
      act(() => {
        resizeWindow(375, 667);
      });

      const burgerMenu = screen.getByTestId('burger-menu');
      expect(burgerMenu).toHaveAttribute('aria-expanded', 'false');
      
      // Vérifie que tous les liens de navigation sont toujours présents
      const navLinks = screen.getAllByRole('link');
      expect(navLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Layout Tests', () => {
    test('Grid layout s\'adapte aux différentes tailles d\'écran', () => {
      render(<App />);
      const gridContainer = screen.getByTestId('grid-container');
      
      // Vérifie que le conteneur a la classe CSS appropriée
      expect(gridContainer).toHaveClass('grid-container');
      
      // Vérifie que le conteneur est bien un élément de grille
      const styles = window.getComputedStyle(gridContainer);
      expect(styles.display).toBe('grid');
    });

    test('Images sont responsives', () => {
      render(<App />);
      const images = screen.getAllByRole('img');
      
      images.forEach(img => {
        expect(img).toHaveClass('responsive-image');
      });
    });
  });

  describe('Typography Tests', () => {
    test('Taille de police s\'adapte aux breakpoints', () => {
      render(<App />);
      const heading = screen.getByRole('heading', { level: 1 });
      
      expect(heading).toHaveClass('responsive-heading');
    });
  });

  describe('Touch Interaction Tests', () => {
    test('Elements interactifs ont une taille minimale pour le touch', () => {
      render(<App />);
      const touchTargets = screen.getAllByRole('button');
      
      touchTargets.forEach(target => {
        expect(target).toHaveClass('touch-button');
      });
    });
  });
});
