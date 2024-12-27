import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useMobileOptimization } from '@/contexts/MobileOptimizationContext';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

export default function ParticlesBackground() {
  const { isLowPowerMode, isLowBandwidth } = useMobileOptimization();
  const { isMobile, isTablet } = useDeviceDetect();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Désactiver les particules en mode économie d'énergie ou bande passante faible
    setIsVisible(!isLowPowerMode && !isLowBandwidth);
  }, [isLowPowerMode, isLowBandwidth]);

  const getOptimizedConfig = () => {
    const baseConfig = {
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#888' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, outModes: 'out' }
      }
    };

    if (isMobile) {
      return {
        ...baseConfig,
        fpsLimit: 30,
        particles: {
          ...baseConfig.particles,
          number: { value: 30, density: { enable: true, value_area: 800 } },
          size: { value: 2 },
          move: { ...baseConfig.particles.move, speed: 1 }
        }
      };
    }

    if (isTablet) {
      return {
        ...baseConfig,
        fpsLimit: 45,
        particles: {
          ...baseConfig.particles,
          number: { value: 50, density: { enable: true, value_area: 800 } }
        }
      };
    }

    return baseConfig;
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!isVisible) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getOptimizedConfig()}
      className="absolute inset-0 -z-10"
    />
  );
}