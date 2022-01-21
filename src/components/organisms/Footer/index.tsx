import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import WidthContainer, {
  WidthContainerSlot,
} from "@components/atoms/WidthContainer";
import Logo from "@components/atoms/Logo";
import "./index.scoped.scss";
import { Link } from "react-router-dom";

const Footer: FunctionComponent = () => {
  const { t } = useContext(LangContext);

  const menu = [
    {
      title: "Help",
      items: [
        {
          title: t("menu.contacts"),
          to: "/contacts",
        },
        {
          title: t("menu.about"),
          to: "/about",
        },
      ],
    },
    {
      title: "Socials",
      items: [
        {
          title: "Telegram",
          to: "/telegram",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <WidthContainer>
        <WidthContainerSlot>
          <div className="footer__inner">
            <div className="footer__col" key={0}>
              <Logo />
            </div>
            {menu.map((menu, menuIndex) => {
              return (
                <div className="footer__col" key={menuIndex}>
                  <span className="footer__col-title">{menu.title}</span>
                  {menu.items.map((item, itemIndex) => {
                    return (
                      <div key={itemIndex} className="footer__row">
                        <Link to={item.to}>{item.title}</Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </WidthContainerSlot>
      </WidthContainer>
      <div className="footer__copyright">
        <span>{__config.project.copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
