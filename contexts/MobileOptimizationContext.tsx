import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

interface MobileOptimizationContextType {
  isLowPowerMode: boolean;
  isReducedMotion: boolean;
  isLowBandwidth: boolean;
  enableLowPowerMode: () => void;
  disableLowPowerMode: () => void;
}

const MobileOptimizationContext = createContext<MobileOptimizationContextType | undefined>(undefined);

export const MobileOptimizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile } = useDeviceDetect();
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLowBandwidth, setIsLowBandwidth] = useState(false);

  useEffect(() => {
    // Détection des préférences de mouvement réduit
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Détection de la connexion réseau
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateConnectionStatus = () => {
        const effectiveType = connection.effectiveType;
        setIsLowBandwidth(['slow-2g', '2g', '3g'].includes(effectiveType));
      };

      updateConnectionStatus();
      connection.addEventListener('change', updateConnectionStatus);
      return () => connection.removeEventListener('change', updateConnectionStatus);
    }
  }, []);

  const enableLowPowerMode = () => setIsLowPowerMode(true);
  const disableLowPowerMode = () => setIsLowPowerMode(false);

  // Activation automatique du mode économie d'énergie si la batterie est faible
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const handleLevelChange = () => {
          if (battery.level <= 0.2) {
            enableLowPowerMode();
          }
        };

        handleLevelChange();
        battery.addEventListener('levelchange', handleLevelChange);
        return () => battery.removeEventListener('levelchange', handleLevelChange);
      });
    }
  }, []);

  return (
    <MobileOptimizationContext.Provider
      value={{
        isLowPowerMode,
        isReducedMotion,
        isLowBandwidth,
        enableLowPowerMode,
        disableLowPowerMode
      }}
    >
      {children}
    </MobileOptimizationProvider>
  );
};

export const useMobileOptimization = () => {
  const context = useContext(MobileOptimizationContext);
  if (context === undefined) {
    throw new Error('useMobileOptimization must be used within a MobileOptimizationProvider');
  }
  return context;
};
