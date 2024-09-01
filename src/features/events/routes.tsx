import genericRoutes from '../generic/routes'
import EventsLayout from './Layout'

export default {
  path: 'events',
  element: <EventsLayout />,
  children: genericRoutes,
}
