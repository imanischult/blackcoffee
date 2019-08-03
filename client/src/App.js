import React from "react";
import "./App.css";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";

// import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Router />
      </div>
    </div>
  );
}

export default App;
