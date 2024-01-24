const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",
  entry: { home: "./src/Home/index.jsx", user: "./src/User/index.jsx" },
  output: {
    clean:true,
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      chunks: ["home"],
      filename: "home.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      chunks: ["user"],
      filename: "user.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // chunks: "initial",
          // chunks: "async",
          chunks: "all",
        },
      },
    },
  },
};
