const path = require("path");
const { FileListPlugin } = require("../src/file-list-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // module: {
  //   rules: [
  //     {
  //       test: /.js$/,
  //       use: [
  //         { loader: path.resolve(__dirname, "../dist/index.js") },
  //       ],
  //     },
  //   ],
  // },
  plugins: [
    new FileListPlugin({
      outputFile: "my-assets.md",
    }),
  ],
};
