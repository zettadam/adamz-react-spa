import genericRoutes from '../generic/genericRoutes'

export default {
  path: 'code',
  async lazy() {
    const { CodeLayout } = await import('./CodeLayout')
    return { Component: CodeLayout }
  },
  children: genericRoutes,
}
