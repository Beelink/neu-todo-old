// layouts
import AppLayout from "@layouts/App";

// pages
import HomePage from "@pages/Home";
import AboutPage from "@pages/About";

// routes
const routes = [
  {
    component: AppLayout,
    routes: [
      { exact: true, path: "/", component: HomePage },
      { exact: true, path: "/about", component: AboutPage },
    ],
  },
];

// export
export default routes;
