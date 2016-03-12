import React from 'react';
import {Route, IndexRoute} from 'react-router';

export default  (
    <Route component={ require('./components/app') }>

        <Route path='*'
               component={ require('./components/notFound') } />
    </Route>
);
