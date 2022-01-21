import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./index.scoped.scss";
import LogoProps from "./props";

const logoContent = () => <span>LOGO</span>;

const Logo: FunctionComponent<LogoProps> = ({ clickable = false }) => {
  return (
    <div className="logo">
      {clickable ? <Link to="/">{logoContent()}</Link> : logoContent()}
    </div>
  );
};

export default Logo;
