import genericRoutes from '../generic/routes'
import LabsLayout from './Layout'

export default {
  path: 'labs',
  element: <LabsLayout />,
  children: genericRoutes,
}
