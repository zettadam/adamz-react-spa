import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './features/MainLayout'
import HomePage from './features/home/HomePage'

import codeRoutes from './features/code/routes'
import eventsRoutes from './features/events/routes'
import labsRoutes from './features/labs/routes'
import linksRoutes from './features/links/routes'
import notesRoutes from './features/notes/routes'
import postsRoutes from './features/posts/routes'

import './app.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      codeRoutes,
      eventsRoutes,
      labsRoutes,
      linksRoutes,
      notesRoutes,
      postsRoutes,
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
