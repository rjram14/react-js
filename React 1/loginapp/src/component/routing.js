import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import UserList from './UserList';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import ProfileComponent from './Profile';


const Rouitng = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}></Route>
                <Route exact path="/login" component={LoginComponent}></Route>
                <Route exact path="/profile" component={ProfileComponent}></Route>
                <Route exact path="/list" component={UserList}></Route>
            </BrowserRouter>
        </div>
    )
}


export default Rouitng