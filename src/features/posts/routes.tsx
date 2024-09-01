import genericRoutes from '../generic/routes'
import PostsLayout from './Layout'

export default {
  path: 'posts',
  element: <PostsLayout />,
  children: genericRoutes,
}
