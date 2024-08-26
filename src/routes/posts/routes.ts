import genericRoutes from '../generic/routes'

export default {
  path: 'posts',
  async lazy() {
    const { Component } = await import('./Layout')
    return { Component }
  },
  children: [...genericRoutes],
}
