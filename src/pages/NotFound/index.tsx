import { FunctionComponent } from "react";
import "./index.scoped.scss";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";

const NotFoundPage: FunctionComponent = () => {

  return (
    <div className="not-found-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="not-found-page__inner">
            <h1>404</h1>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default NotFoundPage;