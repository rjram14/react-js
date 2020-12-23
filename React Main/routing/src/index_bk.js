import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import Post from './component/Posts';
import Profile from './component/Profile';
import { BrowserRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </header>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/posts" component={Post}></Route>
            <Route exact path="/profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
, document.getElementById('root'));

