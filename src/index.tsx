import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import ScrollToTop from "@components/atoms/ScrollToTop";
import routes from "./routes";
import "./assets/scss/index.scss";
import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <ScrollToTop></ScrollToTop> */}
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
