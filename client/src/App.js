import React from "react";
import "./App.css";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";
// import { Button } from "@material-ui/core";
import logo from "./images/coffee-logo.svg";

function App() {
  return (
    <div>
      <div className="App-header">
        <h1 id="intro">
          <span>I Like My</span> <br /> <span>COFFEE BLACK </span>
          <img src={logo} height="80" width="80" alt="Logo" />
        </h1>
      </div>
      <Navbar />
      <div className="App">
        <Router />
      </div>
    </div>
  );
}

export default App;
