/**
 * Created by yixi on 3/12/16.
 */

import { combineReducers } from 'redux-immutablejs';
import { LOCATION_CHANGE } from 'react-router-redux';
import I from 'immutable';


let initialState;

initialState = I.fromJS({
    locationBeforeTransitions: undefined
});

let router = (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        });
    }

    return state;
};

export default combineReducers({
    router
});
