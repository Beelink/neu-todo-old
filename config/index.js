import apiConfig from "./api.config";
import langConfig from "./lang.config";
import projectConfig from "./project.config";

module.exports = {
  dev: {
    project: projectConfig,
    api: apiConfig.dev,
    lang: langConfig,
    isDebug: true,
  },
  stage: {
    project: projectConfig,
    api: apiConfig.stage,
    lang: langConfig,
    isDebug: true,
  },
  prod: {
    project: projectConfig,
    api: apiConfig.prod,
    lang: langConfig,
    isDebug: false,
  },
};
