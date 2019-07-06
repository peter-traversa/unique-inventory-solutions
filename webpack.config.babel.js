const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

require('custom-env').env(process.env.ENV_TAG);

module.exports = {
  entry: {
    main: [
      '@babel/polyfill',
      './src/index.js'
    ]
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundled.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        SAMPLE: JSON.stringify(process.env.SAMPLE),
      },
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      inject: true
    })
  ],
};
