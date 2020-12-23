import React from 'react';
import CreateBoard from './views/CreateBoard';
import Login from './views/Login';
import Home from './views/Home';
import Board from './views/Board';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function Routes() {
    
    return(
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/createBoard" component={CreateBoard}/>
            <Route path="/board" component={Board}/>
        </Router>
    );
    
}

export default Routes;