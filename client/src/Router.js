import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import Reviews from "./components/Reviews/Reviews.js"

class Router extends Component {
    render() {
      const Router = () => (
        <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/index' component={HomePage}/>
            <Route path='/reviews' component={Reviews}/>
            <Route path='*' component={HomePage}/>
          </Switch>
        </div>
      )
    return (
      <Switch>
        <Router />
      </Switch>
    );
  }
}

export default Router;
