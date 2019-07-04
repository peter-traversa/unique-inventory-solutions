// require('dotenv').config();
const express = require('express');
const path = require('path');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.babel.js');
const app = express();
const port = process.env.PORT || 3000;

// app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static('dist'));


app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, './dist')}));
app.listen(port, () => console.log(`Listening on port ${port}...`));