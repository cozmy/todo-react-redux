export const routes = {
  overview: "/",
  calendar: "/calendar",
  label: {
    path: `/label/:id`,
    to: (label: string) => `/label/${label}`,
  },
};
