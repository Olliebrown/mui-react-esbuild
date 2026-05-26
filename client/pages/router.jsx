import { createBrowserRouter } from 'react-router'

// Common page layout
import PageLayout from '../components/PageLayout.jsx'

// Import all the page components
import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

// Create the router (for use in a browser)
const router = createBrowserRouter([{
  // Setup a root layout page and fallback error element
  path: '/',
  element: <PageLayout />,
  errorElement: <NotFoundPage />,

  // Establish individual page routes
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }]
}])

export default router
