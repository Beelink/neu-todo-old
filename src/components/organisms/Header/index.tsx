import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import LangChooser from "@components/molecules/LangChooser";
import Logo from "@components/atoms/Logo";
import { Nav } from "rsuite";
import "./index.scoped.scss";
import NavLinkExtended from "@components/atoms/NavLinkExtended";
import { useLocation } from "react-router-dom";
import MobileDrawer from "../MobileDrawer";
import AuthActions from "@components/molecules/AuthActions";
import { useSelector } from "react-redux";
import State from "@store/state";
import ProfileMenu from "@components/molecules/ProfileMenu";

const Header: FunctionComponent = () => {
  const location = useLocation();
  const { t } = useContext(LangContext);
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);

  const menuItems = [
    {
      title: t("menu.about"),
      to: "/about",
    },
    {
      title: t("menu.news"),
      to: "/news",
    },
    {
      title: t("menu.contacts"),
      to: "/contacts",
    },
  ];

  return (
    <header className="header">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="header__inner">
            <div className="header__logo">
              <Logo clickable={location.pathname !== "/"} />
            </div>
            <div className="header__nav">
              <Nav>
                {menuItems.map((item, itemIndex) => {
                  return (
                    <NavLinkExtended
                      key={itemIndex}
                      to={item.to}
                      text={item.title}
                    />
                  );
                })}
              </Nav>
            </div>
            <LangChooser />
            <div className="header__actions">
              {isLoggedIn ? <ProfileMenu /> : <AuthActions />}
            </div>
            <div className="header__mobile-drawer">
              <MobileDrawer menuItems={menuItems} />
            </div>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </header>
  );
};

export default Header;
