import genericRoutes from '../generic/routes'

export default {
  path: 'code',
  async lazy() {
    const { Component } = await import('./Layout')
    return { Component }
  },
  children: [...genericRoutes],
}
