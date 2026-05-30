const routes = [
  {
    path: ["/", "/home", "/about"],
    exact: true,
    component: "Home",
  },
  {
    path: "/recruit",
    exact: true,
    component: "Recruit",
  },
  {
    path: "/recruit/:id",
    exact: true,
    component: "Recruit/Detail",
  },
  {
    path: "/notice",
    exact: true,
    component: "Notice",
  },
  {
    path: "/notice/:id",
    exact: true,
    component: "Notice/Detail",
  },
];

export default routes;
