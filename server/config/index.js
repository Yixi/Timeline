/**
 * Created by yixi on 1/9/16.
 */
import debug from 'debug';

const env = process.env.NODE_ENV || 'development';

let config;

try {
    config = require(`./${env}`);
} catch (e) {
    debug('server:error')(`no config file for env ${env}`);
}

export default config;