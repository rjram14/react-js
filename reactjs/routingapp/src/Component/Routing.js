import React from 'react';
import { BrowserRouter ,Route ,Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import PostDetails from './PostDetails';
import Lifecycle from './Lifecycle';

const Routing = ()=>{
    return(
        <BrowserRouter>
                 <div>
                    <header >
                    <nav className="navbar navbar-default  ">
                        <div className="container-fluid mt-5 ">
                           <div className="navbar-header">
                              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" >Ramnewas Singh</a>
                           </div>
                           <div className="collapse navbar-collapse" id="myNavbar">
                              <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/post">Post</Link></li>
                                    <li><Link to="/Lifecycle">Lifecycle</Link></li>
                              </ul>
                             
                           </div>
                        </div>
                        </nav>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Profile" component={Profile}></Route>
                    <Route exact path="/Lifecycle" component={Lifecycle}></Route>
                    <Route exact path="/Post" component={Post}></Route>
                    <Route exact path="/Post/:topic" component={PostDetails}></Route>
                 </div>
                </BrowserRouter>
    )
}
export default Routing;