import merge from "webpack-merge";
import common from "./webpack.common.babel.js";
import webpack from "webpack";
import config from "./config/index.js";

module.exports = merge(common, {
  devtool: "inline-source-map",
  plugins: [
    // config
    new webpack.DefinePlugin({
      __config: JSON.stringify(config.dev),
    }),
  ],
});
