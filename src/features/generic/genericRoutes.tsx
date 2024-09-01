export default [
  {
    index: true,
    async lazy() {
      const { IndexRoute } = await import('./IndexRoute')
      return { Component: IndexRoute }
    },
  },
  {
    path: 'archive',
    async lazy() {
      const { ArchiveLayout } = await import('./archive/ArchiveLayout')
      return { Component: ArchiveLayout }
    },
    children: [
      {
        index: true,
        async lazy() {
          const { IndexRoute } = await import('./archive/ArchiveIndexRoute')
          return { Component: IndexRoute }
        },
      },
      {
        path: ':year',
        async lazy() {
          const { YearRoute } = await import('./archive/YearRoute')
          return { Component: YearRoute }
        },
      },
      {
        path: ':year/:month',
        async lazy() {
          const { MonthRoute } = await import('./archive/MonthRoute')
          return { Component: MonthRoute }
        },
      },
      {
        path: ':year/:month/:day',
        async lazy() {
          const { DayRoute } = await import('./archive/DayRoute')
          return { Component: DayRoute }
        },
      },
    ],
  },
  {
    path: 'detail/:id',
    async lazy() {
      const { DetailRoute } = await import('./DetailRoute')
      return { Component: DetailRoute }
    },
  },
]
