import { FunctionComponent, useState } from "react";
import "./index.scoped.scss";
import MobileDrawerProps from "./props";
import { Drawer, IconButton, Nav } from "rsuite";
import NavLinkExtended from "@components/atoms/NavLinkExtended";
import { Menu as MenuIcon } from "@rsuite/icons";

const MobileDrawer: FunctionComponent<MobileDrawerProps> = ({ menuItems }) => {
  const [isOpened, setOpened] = useState(false);

  const _openDrawer = () => {
    setOpened(true);
  };

  const _closeDrawer = () => {
    setOpened(false);
  };

  return (
    <div className="mobile-drawer">
      <IconButton icon={<MenuIcon />} onClick={_openDrawer} />
      <Drawer
        open={isOpened}
        backdrop={true}
        size={"xs"}
        className="mobile-drawer__drawer"
        onClose={_closeDrawer}
      >
        <Drawer.Header>
          <Drawer.Title>Close</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="mobile-drawer__nav">
            <Nav vertical={true}>
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
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
