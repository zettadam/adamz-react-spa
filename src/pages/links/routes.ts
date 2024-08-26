export default {
  path: 'links',
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
    {
      path: 'archive',
      async lazy() {
        const { Component } = await import('../generic/archive/Layout')
        return { Component }
      },
      children: [
        {
          index: true,
          async lazy() {
            const { Component } = await import('../generic/archive/IndexRoute')
            return { Component }
          },
        },
        {
          path: ':year',
          async lazy() {
            const { Component } = await import('../generic/archive/YearRoute')
            return { Component }
          },
        },
        {
          path: ':year/:month',
          async lazy() {
            const { Component } = await import('../generic/archive/MonthRoute')
            return { Component }
          },
        },
        {
          path: ':year/:month/:day',
          async lazy() {
            const { Component } = await import('../generic/archive/DayRoute')
            return { Component }
          },
        },
      ],
    },
    {
      path: ':id',
      async lazy() {
        const { Component } = await import('../generic/DetailRoute')
        return { Component }
      },
    },
  ],
}
