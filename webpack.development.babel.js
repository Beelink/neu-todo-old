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
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // typescript
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /public/],
      },
      // js
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
        exclude: [/node_modules/, /public/],
      },
      // svg
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "scoped-css-loader",
          },
          {
            loader: "sass-loader?sourceMap",
          },
        ],
        exclude: [/node_modules/, /public/],
      },
      // css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // images
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      // fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
});
