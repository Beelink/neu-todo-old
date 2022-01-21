import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common.babel.js";
import CompressionPlugin from "compression-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import config from "./config/index.js";

module.exports = merge(common, {
  devtool: "cheap-module-source-map",
  mode: "production",
  output: {
    path: __dirname + "/public/build/",
    publicPath: "/public/build/",
    filename: "bundle.js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: {
            inline: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 1,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // config
    new webpack.DefinePlugin({
      __config: JSON.stringify(config.prod),
    }),
  ],
});
