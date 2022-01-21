import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import NavLinkExtendedProps from "./props";
import { Nav } from "rsuite";

const NavLinkExtended: FunctionComponent<NavLinkExtendedProps> = ({ text, to }) => (
  <Nav.Item
    as={NavLink}
    to={to}
    className="nav-link-extended"
    activeClassName="rs-nav-item-active"
  >
    {text}
  </Nav.Item>
);

export default NavLinkExtended;
