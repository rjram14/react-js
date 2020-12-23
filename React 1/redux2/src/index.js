import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>, document.getElementById('root')
)
