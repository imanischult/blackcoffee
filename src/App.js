import React, { Component } from "react";
import Router from "./Router";

import Searchbar from "./components/Searchbar/Searchbar";
import "./App.css";
import Router from "./Router";
// import { Button } from "@material-ui/core";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header" />
          <Router />
          <Searchbar />
          <p>Hi</p>
        </div>
      </div>
    );
  }
};

