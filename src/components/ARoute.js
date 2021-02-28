// import React from 'react'
import React, { Switch,Route } from 'react-router-dom';

// page
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

function ARoute() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/gallery/:name">
                <Gallery />
            </Route>
            <Route path="/profile/:name">
                <Profile />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    )
}

export default ARoute
