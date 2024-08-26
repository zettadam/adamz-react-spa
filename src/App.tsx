import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainLayout } from './pages/MainLayout'
import HomePage from './pages/home/HomePage'

import adminRoutes from './pages/admin/routes'
import calendarRoutes from './pages/calendar/routes'
import codeRoutes from './pages/code/routes'
import linksRoutes from './pages/links/routes'
import notesRoutes from './pages/notes/routes'
import postsRoutes from './pages/posts/routes'
import tasksRoutes from './pages/tasks/routes'

import './app.css'

const router = createBrowserRouter([
  adminRoutes,
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      calendarRoutes,
      codeRoutes,
      linksRoutes,
      notesRoutes,
      postsRoutes,
      tasksRoutes,
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
