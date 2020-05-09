import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home/';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Routes = ()=>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home}/>
                <Route path="/registro" component={Register}/>
                <Route path="/Login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;