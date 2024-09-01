import genericRoutes from '../generic/genericRoutes'

export default {
  path: 'events',
  async lazy() {
    const { EventsLayout } = await import('./EventsLayout')
    return { Component: EventsLayout }
  },
  children: genericRoutes,
}
