export default {
  path: "tasks",
  async lazy() {
    const { Layout } = await import("./Layout");
    return { Component: Layout };
  },
  children: [
    {
      index: true,
      async lazy() {
        const { IndexPage } = await import("../generic/IndexPage");
        return { Component: IndexPage };
      },
    },
  ],
};
