export default [
  {
    index: true,
    async lazy() {
      const { IndexPage } = await import("./IndexPage");
      return { Component: IndexPage };
    },
  },
  {
    path: "archive",
    async lazy() {
      const { Layout } = await import("./archive/Layout");
      return { Component: Layout };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { IndexPage } = await import("./archive/IndexPage");
          return { Component: IndexPage };
        },
      },
      {
        path: ":year",
        async lazy() {
          const { YearPage } = await import("./archive/YearPage");
          return { Component: YearPage };
        },
      },
      {
        path: ":year/:month",
        async lazy() {
          const { MonthPage } = await import("./archive/MonthPage");
          return { Component: MonthPage };
        },
      },
      {
        path: ":year/:month/:day",
        async lazy() {
          const { DayPage } = await import("./archive/DayPage");
          return { Component: DayPage };
        },
      },
    ],
  },
  {
    path: ":id",
    async lazy() {
      const { DetailPage } = await import("./DetailPage");
      return { component: DetailPage };
    },
  },
];
