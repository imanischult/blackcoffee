import React from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button";
import Router from "./Router";
import "./App.css";

// import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <Searchbar />
      <Button />

      <div className="App">
        <header className="App-header" />
        <Router />
      </div>
    </div>
  );
}

export default App;
