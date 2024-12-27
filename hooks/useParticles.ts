import { useCallback } from "react"
import type { Container, Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

export interface ParticlesOptions {
  color?: string
  linkColor?: string
  hoverMode?: "grab" | "repulse" | "bubble"
  linkDistance?: number
  linkOpacity?: number
}

export const useParticles = (options: ParticlesOptions = {}) => {
  const {
    color = "#2ec4b6",
    linkColor = "#2ec4b6",
    hoverMode = "grab",
    linkDistance = 140,
    linkOpacity = 0.5,
  } = options

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (process.env.NODE_ENV === 'development') {
      console.log("Particles container loaded", container)
    }
  }, [])

  const particlesConfig = {
    fullScreen: false,
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: hoverMode,
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: linkDistance,
          links: {
            opacity: linkOpacity,
          },
        },
      },
    },
    particles: {
      color: {
        value: color,
      },
      links: {
        color: linkColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return {
    particlesInit,
    particlesLoaded,
    particlesConfig,
  }
}
