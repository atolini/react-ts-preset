const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./app/src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
   extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./app/public/index.html"),
    }),
  ],
};
