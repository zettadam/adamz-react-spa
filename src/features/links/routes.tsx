import genericRoutes from '../generic/routes'
import LinksLayout from './Layout'

export default {
  path: 'links',
  element: <LinksLayout />,
  children: genericRoutes,
}
