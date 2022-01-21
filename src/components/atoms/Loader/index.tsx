import { FunctionComponent } from "react";
import LoaderProps, { LoaderSize } from "./props";
import "./index.scoped.scss";
import cn from "classnames";

const Loader: FunctionComponent<LoaderProps> = ({
  size = LoaderSize.normal,
  dark = true,
}) => {
  return (
    <div
      className={cn({
        loader: true,
        [`loader--${size}`]: true,
        "loader--dark": dark,
      })}
    >
      <div className="loader__lds-dual-ring" />
    </div>
  );
};

export default Loader;
