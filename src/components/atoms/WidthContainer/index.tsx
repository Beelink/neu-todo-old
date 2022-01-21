import { FunctionComponent } from "react";
import { createSlot } from "react-slotify";
import "./index.scoped.scss";
import WidthContainerProps from "./props";

export const WidthContainerSlot = createSlot();

const WidthContainer: FunctionComponent<WidthContainerProps> = ({
  children,
  maxWidth = 1000,
  padding = 16,
}) => {
  return (
    <div
      className="width-container"
      style={{
        maxWidth,
        paddingLeft: padding,
        paddingRight: padding,
      }}
    >
      <WidthContainerSlot.Renderer childs={children}>
        This is default slot content
      </WidthContainerSlot.Renderer>
    </div>
  );
};

export default WidthContainer;
