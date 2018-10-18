import React from 'react';
import {Route,IndexRoute } from 'react-router';
import App from './Components//Containers/App';
import Login from'./Components/Containers/Login/Login';
import Header from './Components/Containers/Header/Header';


export default (
    <Route path="/" component={App}>
   {/* <IndexRoute component={App}/>
    <Route path="Login" component={Login}/>
    <Route path="Header" component={Header}/> */}
    </Route>
);