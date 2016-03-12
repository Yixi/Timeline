import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
import createStore from './redux/create';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

const { NODE_ENV } = process.env;
if (NODE_ENV === 'development') debug.enable('dev,koa');

const routes = require('./routes');

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.get('router').toJS()
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>
    ,document.getElementById('MainAppWapper')
);
