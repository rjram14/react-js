import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';
import Hooks from './Hooks';

const Routing = () => {
    return(
<BrowserRouter>
    <header>
    <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">NareshIT</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/lifecycle">LifeCycle</Link></li>
                <li><Link to="/hooks">Hooks</Link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    <Route exact path="/" component={Home}/>
    <Route exact path="/post" component={Post}/>
    <Route path="/post/:topic" component={PostDetails}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/lifecycle" component={LifeCycle}/>
     <Route path="/hooks" component={Hooks}/>
  </BrowserRouter>
    )
}

export default Routing;