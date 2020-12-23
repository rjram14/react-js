import React from 'react';
import ReactDOM from 'react-dom';
import MoviesList from './container/Movieslist';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider  store={store}>
        <MoviesList />
    </Provider>, document.getElementById('root'));


