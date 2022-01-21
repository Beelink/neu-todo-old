import { FunctionComponent, useState, useEffect, useContext } from "react";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { InputGroup, Input, IconButton } from "rsuite";
import { ArrowRightLine as SigninIcon } from "@rsuite/icons";
import "./index.scoped.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSigninThunk } from "@store/user/user.thunk";
import State from "@store/state";
import { useHistory } from "react-router";
import Loader from "@components/atoms/Loader";
import { LoaderSize } from "@components/atoms/Loader/props";
import { LangContext } from "@context/Lang";

const SigninPage: FunctionComponent = () => {
  const { t } = useContext(LangContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  const isLoading = useSelector((state: State) => state.user.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [signinData, setSigninData] = useState({
    email: "",
    provider: "",
    password: "",
  });

  useEffect(() => {
    _goToProfile();
  });

  useEffect(() => {
    _goToProfile();
  }, [isLoggedIn]);

  const _goToProfile = () => {
    if (isLoggedIn) {
      history.push("/profile");
    }
  };

  const _toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const _signin = () => {
    dispatch(
      fetchUserSigninThunk(
        `${signinData.email}@${signinData.provider}`,
        signinData.password
      )
    );
  };

  return (
    <div className="signin-page">
      <WidthContainer maxWidth={400}>
        <WidthContainerSlot>
          <div className="signin-page__inner">
            <div className="signin-page__row">
              <h1>{t("signin")}</h1>
            </div>
            <div className="signin-page__form">
              <div className="signin-page__row">
                <InputGroup>
                  <Input
                    placeholder="Email"
                    onChange={(e) => {
                      setSigninData({ ...signinData, email: e });
                    }}
                  />
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <Input
                    placeholder="*.com"
                    onChange={(e) => {
                      setSigninData({ ...signinData, provider: e });
                    }}
                  />
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <InputGroup inside>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setSigninData({ ...signinData, password: e });
                    }}
                  />
                  <InputGroup.Button onClick={_toggleShowPassword}>
                    {showPassword ? "Hide" : "Show"}
                  </InputGroup.Button>
                </InputGroup>
              </div>
              <div className="signin-page__row">
                <IconButton icon={<SigninIcon />} onClick={_signin}>
                  {t("signin")}
                </IconButton>
                {isLoading && <Loader size={LoaderSize.small} />}
              </div>
            </div>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default SigninPage;
