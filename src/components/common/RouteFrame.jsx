import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const pageTitles = {
  '/': 'Home', '/overview': 'Overview', '/research': 'Funded Projects',
  '/publications': 'Publications', '/people': 'People', '/resources': 'Resources', '/contact': 'Contact',
};
const labName = 'Rice Computational Neuromechanics Lab';

export default function RouteFrame() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title = `${pageTitles[pathname] || 'Page not found'} | ${labName}`;
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    const frame = requestAnimationFrame(() => {
      const target = (hash && document.getElementById(hash.slice(1))) || document.querySelector('main');
      target?.focus({ preventScroll: true });
      if (!hash) window.scrollTo(0, 0);
      else target?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return <Outlet />;
}
