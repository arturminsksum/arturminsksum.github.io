const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    hot: true,
    host: "localhost",
    port: 3000,
    contentBase: "./src",
    watchOptions: {
      aggregateTimeout: 100,
      ignored: /node_modules/
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "dist/index.html"
    })
  ]
});
