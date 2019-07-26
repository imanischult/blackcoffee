import React from 'react';
import "./Navbar.css";
//including for convienience
import { makeStyles } from "@material-ui/core/styles";


export default () => {
  return (
    <div className="navbar ">
      <h1>ATL Black Bean</h1>

      <a href="/">Home</a>
      <a href="/Reviews">Reviews</a>
    </div>
  )
}
