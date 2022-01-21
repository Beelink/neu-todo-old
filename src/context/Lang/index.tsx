import { useState, useEffect, createContext, FunctionComponent } from "react";
import { withRouter } from "react-router";
import { stringify, parse } from "qs";
import { RouteConfigComponentProps } from "react-router-config";
import LangContextProps from "@context/Lang/props";
import "@context/Lang/i18n";
import { useTranslation } from "react-i18next";

const defaultState: LangContextProps = {
  allLangs: __config.lang.allLangs,
  lang: __config.lang.defaultLang,
  setLang: () => {},
  t: () => { return "" },
};

const LangContext = createContext<LangContextProps>(defaultState);

const LangContextProvider: FunctionComponent<RouteConfigComponentProps> = ({
  children,
  location,
  history,
}) => {
  const query = parse(location.search, { ignoreQueryPrefix: true });

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(
    query.lang?.toString() || localStorage.getItem("lang") || __config.lang.defaultLang
  );

  const _setLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  const _translate = (text: string) => {
    return t(text);
  }

  useEffect(() => {
    if (lang) {
      if (!__config.lang.allLangs.includes(lang)) {
        setLang(__config.lang.defaultLang);
      }
    }
  }, [lang]);

  useEffect(() => {
    if (!query.lang || (query.lang && query.lang !== lang)) {
      let newQeary = stringify({ lang }, { encode: false, skipNulls: true });

      if (query.hash) {
        newQeary += `&hash=${query.hash}`;
      }

      history.replace({
        pathname: `${location.pathname}`,
        search: "?" + newQeary,
      });
    }
  }, [query, lang]);

  return (
    <LangContext.Provider
      value={{
        setLang: _setLang,
        lang,
        allLangs: __config.lang.allLangs,
        t: _translate,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

const LangProvider = withRouter(LangContextProvider);

export { LangProvider, LangContext };
