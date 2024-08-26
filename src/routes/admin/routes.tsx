import AdminPage from './AdminPage'
import AdminCodePage from './code/AdminCodePage'
import AdminCalendarPage from './calendar/AdminCalendarPage'
import AdminLinksPage from './links/AdminLinksPage'
import AdminNotesPage from './notes/AdminNotesPage'
import AdminPostsPage from './posts/AdminPostsPage'
import AdminTasksPage from './tasks/AdminTasksPage'

export default {
  path: '/admin',
  element: <AdminPage />,
  children: [
    { path: 'code', element: <AdminCodePage /> },
    { path: 'calendar', element: <AdminCalendarPage /> },
    { path: 'links', element: <AdminLinksPage /> },
    { path: 'notes', element: <AdminNotesPage /> },
    { path: 'posts', element: <AdminPostsPage /> },
    { path: 'tasks', element: <AdminTasksPage /> },
  ],
}
