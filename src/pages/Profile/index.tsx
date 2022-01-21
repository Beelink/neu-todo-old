import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent, useState } from "react";
import "./index.scoped.scss";
import { LangContext } from "@context/Lang";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import State from "@store/state";
import ImageLoader from "@components/atoms/ImageLoader";
import { InputGroup, Input, IconButton } from "rsuite";
import AuthActions from "@components/molecules/AuthActions";
import { ArrowRightLine as ArrowIcon } from "@rsuite/icons";
import Loader from "@components/atoms/Loader";
import { LoaderSize } from "@components/atoms/Loader/props";
import { fetchChangeUserPasswordThunk } from "@store/user/user.thunk";

const ProfilePage: FunctionComponent = () => {
  const { t } = useContext(LangContext);
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user.user);
  const isLoading = useSelector((state: State) => state.user.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [changePasswordData, setChangePasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const _toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const _changePassword = () => {
    dispatch(fetchChangeUserPasswordThunk(user?.accessToken || "", changePasswordData.oldPassword, changePasswordData.newPassword));
  };

  return (
    <div className="profile-page">
      <WidthContainer maxWidth={400}>
        <WidthContainerSlot>
          <div className="profile-page__inner">
            <div className="profile-page__row">
              <h1>{t("profile")}</h1>
            </div>
            {user ? (
              <div className="profile-page__user-info">
                <div className="profile-page__row">
                  <ImageLoader
                    src={user.image}
                    width={200}
                    height={200}
                    rounded
                  />
                </div>
                <div className="profile-page__row">
                  <h3 className="profile-page__username">{user.username}</h3>
                </div>
                <div className="profile-page__row">
                  <InputGroup inside>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Current password"
                      onChange={(e) => {
                        setChangePasswordData({
                          ...changePasswordData,
                          oldPassword: e,
                        });
                      }}
                    />
                    <InputGroup.Button onClick={_toggleShowPassword}>
                      {showPassword ? "Hide" : "Show"}
                    </InputGroup.Button>
                  </InputGroup>
                </div>
                <div className="profile-page__row">
                  <InputGroup inside>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="New password"
                      onChange={(e) => {
                        setChangePasswordData({
                          ...changePasswordData,
                          newPassword: e,
                        });
                      }}
                    />
                    <InputGroup.Button onClick={_toggleShowPassword}>
                      {showPassword ? "Hide" : "Show"}
                    </InputGroup.Button>
                  </InputGroup>
                </div>
                <div className="profile-page__row">
                  <IconButton icon={<ArrowIcon />} onClick={_changePassword}>
                    Change password
                  </IconButton>
                  {isLoading && <Loader size={LoaderSize.small} />}
                </div>
              </div>
            ) : (
              <div className="profile-page__user-info">
                <div className="profile-page__row">
                  You need to sign in first to see your profile.
                </div>
                <AuthActions />
              </div>
            )}
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default ProfilePage;
