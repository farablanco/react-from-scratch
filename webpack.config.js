const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("dotenv").config();

const APP_DIR = path.join(__dirname, "src");

const plugins = [
  new HtmlWebPackPlugin({
    template: `${APP_DIR}/index.html`,
  }),
  new CleanWebpackPlugin(),
];
const { PORT: port, NODE_ENV: mode } = process.env;

const devServer = {
  port,
  open: true,
};

module.exports = {
  mode,
  devServer,
  plugins,
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
    ],
  },
};
