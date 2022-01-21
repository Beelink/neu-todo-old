interface ApiConfig {
  userAccessTokenName: string;
  apiPrefix: string;
  staticPrefix: string;
}

interface Config {
  project: {
    name: string;
    copyright: string;
  };
  api: ApiConfig;
  lang: {
    allLangs: string[];
    defaultLang: string;
  };
  isDebug: boolean;
}

declare const __config: Config;
