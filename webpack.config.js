import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [... ]
  },
  plugins: [..]
};