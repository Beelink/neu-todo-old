import { FunctionComponent, useEffect, useState, useContext } from "react";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { InputGroup, Input, IconButton } from "rsuite";
import {
  ArrowRightLine as SignupIcon,
  UserInfo as UserIcon,
} from "@rsuite/icons";
import "./index.scoped.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSignupThunk } from "@store/user/user.thunk";
import State from "@store/state";
import { useHistory } from "react-router";
import Loader from "@components/atoms/Loader";
import { LoaderSize } from "@components/atoms/Loader/props";
import { LangContext } from "@context/Lang";

const SignupPage: FunctionComponent = () => {
  const { t } = useContext(LangContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  const isLoading = useSelector((state: State) => state.user.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    username: "",
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

  const _signup = () => {
    dispatch(
      fetchUserSignupThunk(
        signupData.username,
        `${signupData.email}@${signupData.provider}`,
        signupData.password
      )
    );
  };

  return (
    <div className="signup-page">
      <WidthContainer maxWidth={400}>
        <WidthContainerSlot>
          <div className="signup-page__inner">
            <div className="signup-page__row">
              <h1>{t("signup")}</h1>
            </div>
            <div className="signup-page__form">
              <div className="signup-page__row">
                <InputGroup>
                  <InputGroup.Addon>
                    <UserIcon />
                  </InputGroup.Addon>
                  <Input
                    placeholder="Name"
                    onChange={(e) => {
                      setSignupData({ ...signupData, username: e });
                    }}
                  />
                </InputGroup>
              </div>
              <div className="signup-page__row">
                <InputGroup>
                  <Input
                    placeholder="Email"
                    onChange={(e) => {
                      setSignupData({ ...signupData, email: e });
                    }}
                  />
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <Input
                    placeholder="*.com"
                    onChange={(e) => {
                      setSignupData({ ...signupData, provider: e });
                    }}
                  />
                </InputGroup>
              </div>
              <div className="signup-page__row">
                <InputGroup inside>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setSignupData({ ...signupData, password: e });
                    }}
                  />
                  <InputGroup.Button onClick={_toggleShowPassword}>
                    {showPassword ? "Hide" : "Show"}
                  </InputGroup.Button>
                </InputGroup>
              </div>
              <div className="signup-page__row">
                <IconButton icon={<SignupIcon />} onClick={_signup}>
                  {t("signup")}
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

export default SignupPage;
