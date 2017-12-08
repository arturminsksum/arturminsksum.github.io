const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    // "webpack-dev-server/client",
    // "webpack/hot/only-dev-server",
    "core-js/es6/promise",
    "whatwg-fetch",
    "./src/script.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    host: "localhost",
    port: 3000,
    contentBase: "./src",
    watchOptions: {
      aggregateTimeout: 100
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      template: "dist/index.html"
    })
  ]
};
