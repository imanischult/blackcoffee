import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Router from "./Router";
// import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <Searchbar />
      <div className="App">
        <header className="App-header" />
        <Router />
      </div>
    </div>
  );
}

export default App;
