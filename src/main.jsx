import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import HomePage from './components/home/HomePage.jsx';
import OverviewPage from './components/overview/OverviewPage.jsx';
import ResearchPage from './components/research/ResearchPage.jsx';
import PublicationsPage from './components/publications/PublicationsPage.jsx';
import PeoplePage from './components/people/PeoplePage.jsx';
import ResourcesPage from './components/resources/ResourcesPage.jsx';
import ContactPage from './components/contact/ContactPage.jsx';

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
