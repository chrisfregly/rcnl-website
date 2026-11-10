import { useEffect, useState } from 'react';

export default function DeferredParticleEffect() {
  const [Animation, setAnimation] = useState(null);

  useEffect(() => {
    let active = true;
    const load = () => {
      import('./ParticleEffect.jsx')
        .then(module => { if (active) setAnimation(() => module.default); })
        // Decorative animation must never prevent navigation or reading.
        .catch(() => {});
    };
    const idle = 'requestIdleCallback' in window;
    const handle = idle ? window.requestIdleCallback(load, { timeout: 1500 }) : window.setTimeout(load, 200);
    return () => {
      active = false;
      if (idle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, []);

  return Animation ? <Animation /> : null;
}
