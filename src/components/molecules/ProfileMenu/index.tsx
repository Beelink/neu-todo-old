import { FunctionComponent, useContext } from "react";
import { Dropdown } from "rsuite";
import "./index.scoped.scss";
import { useSelector, useDispatch } from "react-redux";
import State from "@store/state";
import { logout } from "@store/user/user.actionCreators";
import { useHistory } from "react-router-dom";
import { LangContext } from "@context/Lang";
import ImageLoader from "@components/atoms/ImageLoader";

const ProfileMenu: FunctionComponent = () => {
  const { t } = useContext(LangContext)
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user.user);

  const _logout = () => {
    dispatch(logout());
  }

  const _goToProfile = () => {
    history.push("/profile");
  }

  return (
    <div className="profile-menu">
      <Dropdown
        placement="bottomEnd"
        title={ <span className="profile-menu__username">{ user?.username }</span> }
        icon={<ImageLoader src={user?.image} width={24} height={24} rounded />}
        noCaret
      >
        <Dropdown.Item onClick={_goToProfile}>{t("profile")}</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item onClick={_logout}>{t("logout")}</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default ProfileMenu;
