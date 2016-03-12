/**
 * Created by yixi on 3/12/16.
 */
import {createStore, compose} from 'redux';
import reducers from './modules/reducers';
import I from 'immutable';

export default function create(initState = I.Map()) {
    if (process.env.NODE_ENV === 'development') {

        // let DevTools  = require('./devtool');
        let { persistState } = require('redux-devtools');

        const enhancer = compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f,
            persistState(
                window.location.href.match(
                    /[?&]debug_session=([^&#]+)\b/
                )
            )
        );

        let store = createStore(reducers, initState, enhancer);
        if (module.hot) {
            module.hot.accept('./modules/reducers', () =>
                store.replaceReducer(require('./modules/reducers'))
            );
        }

        return store;
    } else {
        return createStore(reducers);
    }
}
