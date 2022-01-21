interface LangContextProps {
  allLangs: string[];
  lang: string;
  setLang: (lang: string) => void;
  t: (text: string) => string;
}

export default LangContextProps;
