import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent } from "react";
import "./index.scoped.scss";

const AboutPage: FunctionComponent = () => {
  return (
    <div className="about-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="about-page__inner">
            <h1>About</h1>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default AboutPage;
