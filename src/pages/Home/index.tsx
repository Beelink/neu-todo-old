import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent } from "react";
import "./index.scoped.scss";
import { useContext } from "react";

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="home-page__inner">

          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default HomePage;
