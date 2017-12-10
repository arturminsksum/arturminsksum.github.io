const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["core-js/es6/promise", "whatwg-fetch", "./src/script.js"],
  output: {
    path: path.resolve(__dirname, "../dist/js"),
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
  }
};
