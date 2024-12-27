import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useOptimizedAnimation } from '@/hooks/useOptimizedAnimation';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

interface MobileOptimizedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MobileOptimizedCard: React.FC<MobileOptimizedCardProps> = ({
  children,
  className = '',
  onClick,
}) => {
  const { isLowPowerMode } = useMobileOptimization();
  const { isMobile } = useDeviceDetect();
  const animation = useOptimizedAnimation({
    duration: 200,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });

  // Optimisations conditionnelles
  const shouldApplyHoverEffects = !isLowPowerMode && !isMobile;
  const shouldApplyTransitions = animation.enabled;

  const cardStyle = {
    transition: shouldApplyTransitions
      ? `transform ${animation.optimizedDuration}ms ${animation.optimizedEasing}, 
         box-shadow ${animation.optimizedDuration}ms ${animation.optimizedEasing}`
      : 'none',
    transform: 'translateY(0)',
    willChange: shouldApplyHoverEffects ? 'transform, box-shadow' : 'auto',
  };

  const hoverClass = shouldApplyHoverEffects
    ? 'hover:-translate-y-1 hover:shadow-lg'
    : '';

  return (
    <Card
      className={`${className} ${hoverClass} cursor-pointer`}
      style={cardStyle}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

// Composants optimisés réutilisables
export const OptimizedCardHeader = CardHeader;
export const OptimizedCardContent = CardContent;
export const OptimizedCardFooter = CardFooter;
