<<<<<<< HEAD
import React, { Component } from "react";
import Router from "./Router";

import Searchbar from "./components/Searchbar/Searchbar";
=======
import React from "react";
>>>>>>> f789a2bed2fa3ae2e441b015c0175c3d06a4ac77
import "./App.css";
import Router from "./Router";
// import { Button } from "@material-ui/core";
<<<<<<< HEAD
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
=======

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header" />
        <Router />
>>>>>>> f789a2bed2fa3ae2e441b015c0175c3d06a4ac77
      </div>
    );
  }
};

