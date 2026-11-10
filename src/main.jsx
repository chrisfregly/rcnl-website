import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DeferredParticleEffect from './components/common/effects/DeferredParticleEffect.jsx';
import RouteFrame from './components/common/RouteFrame.jsx';
import RecoveryPage from './components/pages/RecoveryPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import './index.css';

const router = createBrowserRouter([{
  element: <RouteFrame />,
  errorElement: <RecoveryPage />,
  hydrateFallbackElement: <div className="min-h-dvh px-8 py-12"><p role="status">Loading page…</p></div>,
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/overview', lazy: async () => ({ Component: (await import('./components/pages/OverviewPage.jsx')).default }) },
    { path: '/research', lazy: async () => ({ Component: (await import('./components/pages/ResearchPage.jsx')).default }) },
    { path: '/publications', lazy: async () => ({ Component: (await import('./components/pages/PublicationsPage.jsx')).default }) },
    { path: '/people', lazy: async () => ({ Component: (await import('./components/pages/PeoplePage.jsx')).default }) },
    { path: '/resources', lazy: async () => ({ Component: (await import('./components/pages/ResourcesPage.jsx')).default }) },
    { path: '/contact', lazy: async () => ({ Component: (await import('./components/pages/ContactPage.jsx')).default }) },
    { path: '*', element: <RecoveryPage notFound /> },
  ],
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeferredParticleEffect />
    <RouterProvider router={router} />
  </StrictMode>,
);
