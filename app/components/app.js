/**
 * Created by yixi on 3/12/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

require('styles/global/app.scss');

export default class app extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        let props: Object = _.assign({}, this.state, this.props);
        delete props.children;
        return (
            <div id="app">
                <div id="wrapper">
                {this.props.children && React.cloneElement(this.props.children, props)}
                </div>
            </div>
        );
    }
}
