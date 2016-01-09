/**
 * Created by yixi on 1/9/16.
 */
import koa from 'koa';
import logger from 'koa-logger';
import router from 'koa-router';
import debug from 'debug';
import config from './config';
import Route from './router';
import middleware from './middleware';

const app = koa();

app.use(logger());

middleware.register(app);
Route.register(app);

app.listen(config.port);
debug('server:info')(`server run in ${config.port}`);

