'use client';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: "#00ff88",
          },
          number: {
            value: 120,  // Increased particle count
            density: {
              enable: true,
              area: 800,
            },
          },
          links: {
            color: "#00ff88",
            distance: 120,  // Closer connections
            enable: true,
            opacity: 0.8,  // More visible links
            width: 2,      // Thicker lines
          },
          move: {
            enable: true,
            speed: 3,      // Faster movement
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
          opacity: {
            value: 1,      // Fully opaque
          },
          size: {
            value: { min: 3, max: 6 },  // Larger particles
          },
          shape: {
            type: "circle"  // Explicit shape definition
          },
          shadow: {
            enable: true,
            color: "#00ff88",
            blur: 20
          }
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              particles: {
                number: 60,
                size: { min: 2, max: 4 }
              }
            }
          }
        ]
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}