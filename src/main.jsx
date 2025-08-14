import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import HomePage from './components/pages/HomePage.jsx';
import OverviewPage from './components/pages/OverviewPage.jsx';
import ResearchPage from './components/pages/ResearchPage.jsx';
import PublicationsPage from './components/pages/PublicationsPage.jsx';
import PeoplePage from './components/pages/PeoplePage.jsx';
import ResourcesPage from './components/pages/ResourcesPage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/research",
    element: <ResearchPage />,
  },
  {
    path: "/publications",
    element: <PublicationsPage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
