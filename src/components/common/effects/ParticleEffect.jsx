import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Initialize the shared engine once, including under React StrictMode.
let engineReady;

// The React wrapper reloads its canvas whenever its props change. Keep the
// renderer memoized so changing the pause button never destroys the scene.
const ParticleCanvas = memo(Particles);
const particleOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  fpsLimit: 60,
  autoPlay: true,
  pauseOnOutsideViewport: false,
  interactivity: {
    events: { onHover: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 140, duration: 0.4 } },
  },
  particles: {
    color: { value: '#0f53ea' },
    links: { color: '#0f53ea', distance: 250, enable: true, opacity: 0.35, width: 1.5 },
    move: { enable: true, speed: 2, outModes: { default: 'bounce' } },
    number: { density: { enable: true }, value: 50 },
    opacity: { value: 0.45 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 6 } },
  },
  detectRetina: true,
};

function setMotion(container, stopped) {
  if (!container) return;
  container.actualOptions.particles.move.enable = !stopped;
  container.actualOptions.interactivity.events.onHover.enable = !stopped;
  if (stopped) container.pause();
  else container.play();
}

function ParticleEffect() {
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const containerRef = useRef(null);
  const stopped = paused || reducedMotion;
  const stoppedRef = useRef(stopped);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let mounted = true;
    engineReady ??= initParticlesEngine(loadSlim).then(() => true).catch(() => {
      engineReady = undefined;
      return false;
    });
    engineReady.then(success => { if (mounted) setReady(success); });
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    stoppedRef.current = stopped;
    setMotion(containerRef.current, stopped);
  }, [stopped]);

  const onParticlesLoaded = useCallback(async container => {
    containerRef.current = container;
    setMotion(container, stoppedRef.current);
    // Reduced motion may pause before the first animation frame. Paint the
    // initialized particles once with zero elapsed time so the scene is visible.
    if (stoppedRef.current) container?.particles.draw({ value: 0, factor: 0 });
  }, []);

  return ready ? (
    <>
      <div aria-hidden="true"><ParticleCanvas id="particles" options={particleOptions} particlesLoaded={onParticlesLoaded} /></div>
      {!reducedMotion && <button type="button" className="animation-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
        {paused ? 'Resume animation' : 'Pause animation'}
      </button>}
    </>
  ) : null;
}

export default ParticleEffect;
