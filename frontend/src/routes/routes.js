import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home/';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NewContent from '../pages/NewContent';
import Comment from '../pages/Comment';

const Routes = ()=>{
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home}/>
                <Route path="/registro" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/perfil" component={Profile}/>
                <Route path="/newcontent" component={NewContent}/>
                <Route path="/comentario" component={Comment}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;