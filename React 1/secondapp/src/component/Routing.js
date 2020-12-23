import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';

const Routing =() => {
    return(
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                <Route exact path="/" component={Home}></Route>
                <Route path="/post" component={Posts}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>    
    )
}

export default Routing;