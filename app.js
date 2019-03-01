const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel.js');
const app = express();
const port = 3000;

app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(port, () => console.log(`Listening on port ${port}...`));