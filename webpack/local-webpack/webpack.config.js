const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  resolve: {
    alias: {
      "@":"./src",
    },
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
};
