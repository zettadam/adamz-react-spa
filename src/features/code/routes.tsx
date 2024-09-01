import genericRoutes from '../generic/routes'
import CodeLayout from './Layout'

export default {
  path: 'code',
  element: <CodeLayout />,
  children: genericRoutes,
}
