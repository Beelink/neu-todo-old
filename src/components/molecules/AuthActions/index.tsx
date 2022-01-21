import { FunctionComponent, useContext } from "react";
import { Button } from "rsuite";
import "./index.scoped.scss";
import { useHistory } from "react-router-dom";
import { LangContext } from "@context/Lang";
import { Link } from "react-router-dom";

const AuthActions: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useContext(LangContext);

  return (
    <div className="auth-actions">
      <Button as={Link} to="/signin" appearance="ghost">
        {t("signin")}
      </Button>
      <Button as={Link} to="/signup" appearance="primary">
        {t("signup")}
      </Button>
    </div>
  );
};

export default AuthActions;
