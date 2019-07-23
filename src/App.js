<<<<<<< HEAD
import React from 'react';
import './App.css';
import Router from './Router';
=======
import React from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Router from "./Router";
import "./App.css";
// import { Button } from "@material-ui/core";
>>>>>>> ebe972748af3a516f2a7c2162148628706156c4a

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
