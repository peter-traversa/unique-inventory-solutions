import express from 'express';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel.js/index.js';
const app = express();
const port = 3000;

app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(port, () => console.log(`Listening on port ${port}...`));