const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "webpack-dev-server/client",
    "webpack/hot/only-dev-server",
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
    contentBase: "./dist",
    watchOptions: {
      aggregateTimeout: 100
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
