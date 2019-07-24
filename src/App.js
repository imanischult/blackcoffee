import React from "react";
import "./App.css";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";
// import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </div>
  );
}

export default App;
