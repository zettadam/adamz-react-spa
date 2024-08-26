export default {
  path: 'tasks',
  async lazy() {
    const { Component } = await import('./Layout')
    return { Component }
  },
  children: [
    {
      index: true,
      async lazy() {
        const { Component } = await import('../generic/IndexRoute')
        return { Component }
      },
    },
  ],
}
