// import React from 'react'
import React, { Switch,Route } from 'react-router-dom';

// page
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

function ARoute(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/login">
                <Login setButton={props.setButton}/>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    )
}

export default ARoute
