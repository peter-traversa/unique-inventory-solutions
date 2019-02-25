import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new LiveReloadPlugin()
  ]
};