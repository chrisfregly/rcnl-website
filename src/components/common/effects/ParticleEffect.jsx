import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Initialize the shared engine once, including under React StrictMode.
let engineReady;
const MAX_PARTICLES = 120;
const DOTS_PER_CLICK = 4;

// The React wrapper reloads its canvas whenever its props change. Keep the
// renderer memoized so changing the pause button never destroys the scene.
const ParticleCanvas = memo(Particles);
function createParticleOptions() {
  // Read the same token used by links, buttons, and heading highlights.
  // This runs after the stylesheet loads, once per animation mount.
  const blue = getComputedStyle(document.documentElement).getPropertyValue('--color-blue').trim();
  return {
    fullScreen: { enable: true, zIndex: -1 },
    fpsLimit: 60,
    autoPlay: true,
    pauseOnOutsideViewport: false,
    // Visibility is coordinated with the user pause state below.
    pauseOnBlur: false,
    interactivity: {
      events: {
        // Handle clicks below so UI controls never add particles.
        onClick: { enable: false, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 140, duration: 0.4 },
      },
    },
    particles: {
      color: { value: blue },
      links: { color: blue, distance: 250, enable: true, opacity: 0.35, width: 1.5 },
      move: { enable: true, speed: 2, outModes: { default: 'bounce' } },
      number: { density: { enable: true }, value: 50 },
      opacity: { value: 0.45 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 6 } },
    },
    detectRetina: true,
  };
}

function setMotion(container, stopped) {
  if (!container) return;
  container.actualOptions.particles.move.enable = !stopped;
  for (const particle of container.particles.filter(() => true)) {
    particle.options.move.enable = !stopped;
  }
  container.actualOptions.interactivity.events.onHover.enable = !stopped;
  if (stopped) container.pause();
  else container.play();
}

function ParticleEffect() {
  const particleOptions = useMemo(createParticleOptions, []);
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
    setMotion(containerRef.current, stopped || document.hidden);
  }, [stopped]);

  useEffect(() => {
    const updateVisibility = () => setMotion(containerRef.current, stoppedRef.current || document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    const addDots = event => {
      const container = containerRef.current;
      if (!container || stoppedRef.current || document.hidden || event.defaultPrevented || event.button !== 0) return;
      const controls = 'nav, a, button, input, textarea, select, label, [role="button"], [role="link"], [contenteditable="true"]';
      if (event.composedPath().some(node => node instanceof Element && node.matches(controls))) return;
      const canvas = container.canvas.element;
      if (!canvas) return;
      const bounds = canvas.getBoundingClientRect();
      const ratio = container.retina.pixelRatio;
      // Recycle older particles so every click still adds dots at the pointer.
      const excess = container.particles.count + DOTS_PER_CLICK - MAX_PARTICLES;
      if (excess > 0) container.particles.removeQuantity(excess);
      container.particles.push(DOTS_PER_CLICK, { position: {
        x: (event.clientX - bounds.left) * ratio,
        y: (event.clientY - bounds.top) * ratio,
      } });
    };
    document.addEventListener('click', addDots);
    return () => document.removeEventListener('click', addDots);
  }, []);

  const onParticlesLoaded = useCallback(async container => {
    containerRef.current = container;
    if (container && container.particles.count > MAX_PARTICLES) {
      container.particles.removeQuantity(container.particles.count - MAX_PARTICLES);
    }
    setMotion(container, stoppedRef.current || document.hidden);
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
