import { FunctionComponent, useEffect } from "react";
import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { LangProvider } from "@context/Lang";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scoped.scss";
import userTokenService from "@services/userToken.service";
import { useDispatch } from "react-redux";
import { fetchCurrentUserThunk } from "@store/user/user.thunk";

const App: FunctionComponent<RouteConfigComponentProps> = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = userTokenService.getUserToken();
    if (accessToken) {
      dispatch(fetchCurrentUserThunk(accessToken));
    }
  });

  return (
    <LangProvider>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        limit={3}
        autoClose={2500}
      />
      <div className="app-layout">
        <Header />
        <div className="app-layout__page">
          {renderRoutes(route?.routes)}
        </div>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default App;
