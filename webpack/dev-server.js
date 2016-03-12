process.env.BABEL_ENV = 'browser';
process.env.NODE_ENV = 'development';

import Koa from 'koa';
import debug from 'debug';
import webpack from 'webpack';
import convert from 'koa-convert';

import config from './dev.config';

const app = new Koa();
const compiler = webpack(config.webpack);

debug.enable('dev');

app.use(convert(require('koa-webpack-dev-middleware')(compiler, config.server.options)));
app.use(convert(require('koa-webpack-hot-middleware')(compiler)));

app.listen(config.server.port, '0.0.0.0', () =>
  debug('dev')('`webpack-dev-server` listening on port %s', config.server.port));


// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
//
// var config = require('./dev.config');
//
// // import webpack from 'webpack';
// // import WebpackDevServer from 'webpack-dev-server';
// //
// // import config from './dev.config';
//
// var compiler = webpack(config.webpack);
// var devServer = new WebpackDevServer(compiler, config.server.options);
//
// devServer.listen(config.server.port, config.server.host, function() {
//     console.log('webpack-dev-server listen on port %s', config.server.port);
// });
