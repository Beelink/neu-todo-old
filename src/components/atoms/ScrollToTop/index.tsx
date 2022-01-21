import { FunctionComponent, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { RouteConfigComponentProps } from "react-router-config";

const ScrollToTop: FunctionComponent<RouteConfigComponentProps> = ({
  history,
}) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
