/**
 * Created by yixi on 1/9/16.
 */
import path from 'path';
import hbs from 'koa-hbs';

export default {
    register: (app) => {

        app.use(hbs.middleware({
            viewPath: path.join(__dirname, './views'),
            partialsPath: __dirname + '/views/partials'
        }));
    }
}