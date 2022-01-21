import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import { FunctionComponent } from "react";
import "./index.scoped.scss";
import { LangContext } from "@context/Lang";
import { useContext } from "react";

const AboutPage: FunctionComponent = () => {
  const { t } = useContext(LangContext);

  return (
    <div className="about-page">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="about-page__inner">
            <h1>{t("page.about")}</h1>
          </div>
        </WidthContainerSlot>
      </WidthContainer>
    </div>
  );
};

export default AboutPage;
