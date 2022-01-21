import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import { Dropdown } from "rsuite";
import "./index.scoped.scss";

const LangChooser: FunctionComponent = () => {
  const { lang, setLang, allLangs } = useContext(LangContext);

  const handleChange = (lang: string) => {
    setLang(lang);
  };

  return (
    <div className="lang-chooser">
      <Dropdown
        title={
          <span className="profile-menu__username">{lang.toUpperCase()}</span>
        }
        activeKey={lang}
      >
        {allLangs.map((item, itemIndex) => {
          return (
            <Dropdown.Item
              key={itemIndex}
              eventKey={item}
              onClick={() => handleChange(item)}
            >
              {item.toUpperCase()}
            </Dropdown.Item>
          );
        })}
      </Dropdown>
    </div>
  );
};

export default LangChooser;
