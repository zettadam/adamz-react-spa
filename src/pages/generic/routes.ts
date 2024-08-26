export default [
  {
    index: true,
    async lazy() {
      const { Component } = await import('./IndexRoute')
      return { Component }
    },
  },
  {
    path: 'archive',
    async lazy() {
      const { Component } = await import('./archive/Layout')
      return { Component }
    },
    children: [
      {
        index: true,
        async lazy() {
          const { Component } = await import('./archive/IndexRoute')
          return { Component }
        },
      },
      {
        path: ':year',
        async lazy() {
          const { Component } = await import('./archive/YearRoute')
          return { Component }
        },
      },
      {
        path: ':year/:month',
        async lazy() {
          const { Component } = await import('./archive/MonthRoute')
          return { Component }
        },
      },
      {
        path: ':year/:month/:day',
        async lazy() {
          const { Component } = await import('./archive/DayRoute')
          return { Component }
        },
      },
    ],
  },
  {
    path: 'detail/:id',
    async lazy() {
      const { Component } = await import('./DetailRoute')
      return { Component }
    },
  },
]
