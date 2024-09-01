import genericRoutes from '../generic/genericRoutes'

export default {
  path: 'labs',
  async lazy() {
    const { LabsLayout } = await import('./LabsLayout')
    return { Component: LabsLayout }
  },
  children: genericRoutes,
}
