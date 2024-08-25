import genericRoutes from "../generic/routes";

export default {
  path: "notes",
  async lazy() {
    const { Layout } = await import("./Layout");
    return { Component: Layout };
  },
  children: [...genericRoutes],
};
