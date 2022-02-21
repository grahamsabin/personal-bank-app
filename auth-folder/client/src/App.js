//APP.JS TIES EVERYTHING TOGETHER WITH BROWSER ROUTER BY GIVING ROUTES
    //Includes imports from every other file
    //Specify the route and how to call it

import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

//additions for redux
import {Provider} from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/design/Navbar";
import LandingPage from "./components/design/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
//////////////

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>
            <Route path = "/register">
              <Register/>
            </Route>
            <Route path = "/login">
              <Login/>
            </Route>
            <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider> //redux
    );
  }
}

export default App;

{/* <Provider store={store}>
<BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element = {<LandingPage/>} />
    <Route path = "/register" element={<Register/>} />
    <Route path = "/login" element={<Login/>} />
  </Routes>
</BrowserRouter>
</Provider> //redux */}


