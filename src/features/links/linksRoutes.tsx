import genericRoutes from '../generic/genericRoutes'

export default {
  path: 'links',
  async lazy() {
    const { LinksLayout } = await import('./LinksLayout')
    return { Component: LinksLayout }
  },
  children: genericRoutes,
}
