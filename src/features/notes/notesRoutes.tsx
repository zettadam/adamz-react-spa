import genericRoutes from '../generic/genericRoutes'

export default {
  path: 'notes',
  async lazy() {
    const { NotesLayout } = await import('./NotesLayout')
    return { Component: NotesLayout }
  },
  children: genericRoutes,
}
