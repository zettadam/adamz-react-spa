import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainLayout } from './routes/MainLayout'
import HomePage from './routes/home/HomePage'

import adminRoutes from './routes/admin/routes'
import calendarRoutes from './routes/calendar/routes'
import codeRoutes from './routes/code/routes'
import linksRoutes from './routes/links/routes'
import notesRoutes from './routes/notes/routes'
import postsRoutes from './routes/posts/routes'
import tasksRoutes from './routes/tasks/routes'

import './app.css'

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: '/adamz-react-spa/',
  },
)

function App() {
  return <RouterProvider router={router} />
}

export default App
