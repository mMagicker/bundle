const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  mode:"development",
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    })
  ],
  optimization:{
    splitChunks:{
      
    }
  }
}