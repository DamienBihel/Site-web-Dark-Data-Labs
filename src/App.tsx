import React, { useState, useEffect, Suspense, memo, useCallback } from 'react';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import { useToastAnimation } from './hooks/useToastAnimation';

const StyledGridContainer = styled.div.attrs(() => ({
  className: 'grid-container',
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledResponsiveImage = styled.img.attrs(() => ({
  className: 'responsive-image',
}))`
  max-width: 100%;
  height: auto;
`;

const StyledResponsiveHeading = styled.h1.attrs(() => ({
  className: 'responsive-heading',
}))`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StyledTouchButton = styled.button.attrs(() => ({
  className: 'touch-button',
}))`
  min-width: 44px;
  min-height: 44px;
  padding: 12px 20px;
  cursor: pointer;
`;

const StyledBurgerMenu = styled.button.attrs(() => ({
  className: 'burger-menu',
}))`
  display: none;
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));

// Types pour les notifications
type ToastType = {
  id: number;
  message: string;
};

type AlertType = {
  id: number;
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
  important?: boolean;
  action?: () => void;
};

// Composants stylisés
const VirtualToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  max-height: ${5 * 64}px;
  overflow: hidden;
`;

const Toast = styled.div`
  background: #333;
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  min-width: 200px;
  height: 64px;
  margin-bottom: 10px;
  will-change: transform, opacity;
`;

// Composant pour le rendu de chaque toast
const ToastRow = memo(({ index, style, data }: any) => {
  const toast = data[index];
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useToastAnimation(isVisible, () => {
    if (!isVisible) {
      // Utiliser une fonction pour mettre à jour les données
      data.splice(index, 1);
      if (data.length === 0) {
        // Forcer une mise à jour du composant parent
        data.length = 0;
      }
    }
  }, {
    duration: 300,
    easing: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast
      ref={elementRef}
      style={{
        ...style,
        transition: 'none',
        willChange: 'transform, opacity'
      }}
      data-testid="toast"
      role="alert"
      aria-live="polite"
    >
      {toast.message}
    </Toast>
  );
});

ToastRow.displayName = 'ToastRow';

const AlertContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;

const Alert = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 4px;
  min-width: 300px;
  background: ${({ type }) => {
    switch (type) {
      case 'success': return '#4caf50';
      case 'warning': return '#ff9800';
      case 'error': return '#f44336';
      default: return '#2196f3';
    }
  }};
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  margin-left: 10px;
  
  &:focus {
    outline: 2px solid white;
    border-radius: 2px;
  }
`;

const ActionButton = styled.button`
  background: white;
  border: none;
  color: #333;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  
  &:focus {
    outline: 2px solid white;
    border-radius: 4px;
  }
`;

const App: React.FC<{ onAlertAction?: () => void }> = ({ onAlertAction }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stateValue, setStateValue] = useState('initial');

  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  // Gestion des toasts
  const showToast = useCallback((message: string) => {
    const newToast = { id: Date.now(), message };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== newToast.id));
    }, 3000);
  }, []);

  // Gestion des alertes
  const showAlert = useCallback((type: AlertType['type'], message: string, important = false) => {
    const newAlert = { id: Date.now(), type, message, important };
    setAlerts(prev => [...prev, newAlert]);
  }, []);

  const closeAlert = useCallback((id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);

  const showAlertWithAction = useCallback(() => {
    setAlerts(prev => [
      ...prev,
      {
        id: Date.now(),
        type: 'info',
        message: 'Alert with action',
        action: onAlertAction || (() => console.log('Alert action'))
      }
    ]);
  }, [onAlertAction]);

  // Persistance des alertes importantes
  useEffect(() => {
    const savedAlerts = localStorage.getItem('important-alerts');
    if (savedAlerts) {
      setAlerts(JSON.parse(savedAlerts));
    }
  }, []);

  useEffect(() => {
    const importantAlerts = alerts.filter(alert => alert.important);
    localStorage.setItem('important-alerts', JSON.stringify(importantAlerts));
  }, [alerts]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fetchWithCache = async (url: string) => {
    const cache = await caches.open('api-cache');
    const cachedResponse = await cache.match(url);
    
    if (cachedResponse) {
      return cachedResponse.json();
    }
    
    const response = await fetch(url);
    cache.put(url, response.clone());
    return response.json();
  };

  const renderToasts = () => {
    if (toasts.length === 0) return null;

    const listHeight = Math.min(toasts.length * 64, 5 * 64);

    return (
      <VirtualToastContainer data-testid="virtual-toast-container">
        <div data-testid="virtual-toast-list" style={{ height: listHeight, width: 300 }}>
          <List
            height={listHeight}
            itemCount={toasts.length}
            itemSize={64}
            width={300}
            itemData={toasts}
          >
            {ToastRow}
          </List>
        </div>
      </VirtualToastContainer>
    );
  };

  return (
    <div data-testid="app-container">
      <header>
        {isMobile && (
          <StyledBurgerMenu
            data-testid="burger-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </StyledBurgerMenu>
        )}
        <nav>
          <a href="/" fetchpriority="high" data-testid="critical-nav-home">Accueil</a>
          <a href="/about">À propos</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <StyledResponsiveHeading data-testid="critical-heading">
          Dark Data Labs
        </StyledResponsiveHeading>
        
        <StyledGridContainer data-testid="grid-container">
          <div>
            <StyledResponsiveImage 
              src="/placeholder1.jpg" 
              alt="Description 1" 
              loading="lazy"
            />
            <StyledTouchButton>En savoir plus</StyledTouchButton>
          </div>
          <div>
            <StyledResponsiveImage 
              src="/placeholder2.jpg" 
              alt="Description 2" 
              loading="lazy"
            />
            <StyledTouchButton>En savoir plus</StyledTouchButton>
          </div>
          <div>
            <StyledResponsiveImage 
              src="/placeholder3.jpg" 
              alt="Description 3" 
              loading="lazy"
            />
            <StyledTouchButton>En savoir plus</StyledTouchButton>
          </div>
        </StyledGridContainer>

        <div data-testid="state-value">{stateValue}</div>

        <Suspense fallback={<div>Chargement...</div>}>
          <HeavyComponent />
        </Suspense>

        {/* Boutons de test */}
        <button data-testid="show-toast-button" onClick={() => showToast('Notification test')}>
          Show Toast
        </button>
        
        {['success', 'warning', 'error', 'info'].map(type => (
          <button
            key={type}
            data-testid={`show-alert-${type}`}
            onClick={() => showAlert(type as AlertType['type'], `${type} message`)}
          >
            Show {type} Alert
          </button>
        ))}
        
        <button
          data-testid="show-alert-action"
          onClick={showAlertWithAction}
        >
          Show Alert with Action
        </button>
        
        <button
          data-testid="show-alert-important"
          onClick={() => showAlert('warning', 'Important alert', true)}
        >
          Show Important Alert
        </button>

        {renderToasts()}

        {/* Container des alertes */}
        <AlertContainer>
          {alerts.map(alert => (
            <Alert
              key={alert.id}
              type={alert.type}
              data-testid={`alert-${alert.type}`}
              role="alert"
              aria-live="assertive"
            >
              <span>{alert.message}</span>
              <div>
                {alert.action && (
                  <ActionButton
                    data-testid="alert-action-button"
                    onClick={alert.action}
                  >
                    Action
                  </ActionButton>
                )}
                <CloseButton
                  data-testid="alert-close-button"
                  onClick={() => closeAlert(alert.id)}
                  aria-label="Close alert"
                >
                  ✕
                </CloseButton>
              </div>
            </Alert>
          ))}
        </AlertContainer>
      </main>
    </div>
  );
};

export default memo(App);
