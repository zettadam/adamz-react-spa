import genericRoutes from "../generic/routes";

export default {
  path: "code",
  async lazy() {
    const { Layout } = await import("./Layout");
    return { Component: Layout };
  },
  children: [...genericRoutes],
};
