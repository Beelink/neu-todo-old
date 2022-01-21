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
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true),
      },
    }),
    new Dotenv(),
  ],
};
