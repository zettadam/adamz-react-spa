import genericRoutes from '../generic/genericRoutes'

export default {
  path: 'posts',
  async lazy() {
    const { PostsLayout } = await import('./PostsLayout')
    return { Component: PostsLayout }
  },
  children: genericRoutes,
}
