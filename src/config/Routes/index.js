import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import About from "../../pages/About";
import TambahUsers from "../../pages/TambahUsers";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/AddUser">
          <TambahUsers />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
