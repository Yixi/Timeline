/**
 * Created by yixi on 1/9/16.
 */

const router  = require('koa-router')();

router.get('/', function* (){
    return yield this.render('app');
});


export default {
    register: (app) => {
        app
            .use(router.routes())
            .use(router.allowedMethods());
    }
}