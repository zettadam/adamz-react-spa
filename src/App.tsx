import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import codeRoutes from './features/code/codeRoutes'
import eventsRoutes from './features/events/eventsRoutes'
import labsRoutes from './features/labs/labsRoutes'
import linksRoutes from './features/links/linksRoutes'
import notesRoutes from './features/notes/notesRoutes'
import postsRoutes from './features/posts/postsRoutes'

import './app.css'

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { MainLayout } = await import('./features/MainLayout')
      return { Component: MainLayout }
    },
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import('./features/home/HomePage')
          return { Component: HomePage }
        },
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
