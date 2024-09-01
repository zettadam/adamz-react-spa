import genericRoutes from '../generic/routes'
import NotesLayout from './Layout'

export default {
  path: 'notes',
  element: <NotesLayout />,
  children: genericRoutes,
}
