const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  mode: 'development',
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new LiveReloadPlugin()
  ]
};