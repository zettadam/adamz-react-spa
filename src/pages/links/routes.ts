import genericRoutes from '../generic/routes'

export default {
  path: 'links',
  async lazy() {
    const { Component } = await import('./Layout')
    return { Component }
  },
  children: [...genericRoutes],
}
