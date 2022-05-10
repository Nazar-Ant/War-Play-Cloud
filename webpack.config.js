const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/js/script.js",

  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: `${path.resolve(__dirname, "public")}/favicon.ico`,
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== "production",
      pngquant: {
        quality: "95-100",
      },
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 8080,
  },
};
