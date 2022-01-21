import webpack from "webpack";
import path from "path";
import Dotenv from "dotenv-webpack";

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.join(__dirname + "public/build/"),
    publicPath: "/public/build/",
    filename: "bundle.js",
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@context": path.resolve(__dirname, "src/context"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@services": path.resolve(__dirname, "src/services"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@store": path.resolve(__dirname, "src/store"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@api": path.resolve(__dirname, "src/api"),
      "@routes": path.resolve(__dirname, "src/routes"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true),
      },
    }),
    new Dotenv(),
  ],
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
};
