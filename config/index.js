import apiConfig from "./api.config";
import projectConfig from "./project.config";

module.exports = {
  dev: {
    project: projectConfig,
    api: apiConfig.dev,
    isDebug: true,
  },
  prod: {
    project: projectConfig,
    api: apiConfig.prod,
    isDebug: false,
  },
};
