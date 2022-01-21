// layouts
import AppLayout from "@layouts/App";

// pages
import HomePage from "@pages/Home";
import AboutPage from "@pages/About";
import SigninPage from "@pages/Signin";
import SignupPage from "@pages/Signup";
import Profilepage from "@pages/Profile";
import NotFoundPage from "@pages/NotFound";

// routes
const routes = [
  {
    component: AppLayout,
    routes: [
      { exact: true, path: "/", component: HomePage },
      { exact: true, path: "/about", component: AboutPage },
      { exact: true, path: "/signin", component: SigninPage },
      { exact: true, path: "/signup", component: SignupPage },
      { exact: true, path: "/profile", component: Profilepage },
      { component: NotFoundPage },
    ],
  },
];

// export
export default routes;
