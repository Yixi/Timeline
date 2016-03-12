/**
 * Created by yixi on 3/12/16.
 */
import fs from 'fs';
import path from 'path';
import debug from 'debug';

function routes(router) {
  router.get('/', async function(ctx) {

    try {
      // Reload './webpack-stats.json' on dev
      // cache it on production
      let assets;
      if (process.env.NODE_ENV === 'development') {
        assets = fs.readFileSync(path.resolve(__dirname, './webpack-stats.json'));
        assets = JSON.parse(assets);
      } else {
        assets = require('./webpack-stats.json');
      }

      debug('dev')('return html content');
      const body = '';
      const title = '';

      let scripts = assets.script.map((url) => {
          return `<script src="${url}"></script>`;
      }).join('');

      const HTML = `
        <!DOCTYPE html>
        <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <meta name="description" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        </head>
        <body>
        <div id="MainAppWapper"></div>
        ${scripts}
        </body>
        </html>
      `;


      ctx.body = HTML;


    } catch (error) {
      ctx.body = error;
      throw error;
    }


  });
}

export default routes;
