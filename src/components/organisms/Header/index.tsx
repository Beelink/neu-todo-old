import { FunctionComponent } from "react";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import Logo from "@components/atoms/Logo";
import { Nav } from "rsuite";
import "./index.scoped.scss";
import NavLinkExtended from "@components/atoms/NavLinkExtended";
import { useLocation } from "react-router-dom";

const Header: FunctionComponent = () => {
  const location = useLocation();

  return (
    <header className="header">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="header__inner">
            <div className="header__logo">
              <Logo clickable={location.pathname !== "/"} />
            </div>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </header>
  );
};

export default Header;
