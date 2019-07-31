import React from "react";
// replaces <a> tag with react's Link to prevent the page from refreshing
import { Link } from "react-router-dom";
import "./Navbar.css";
//including for convienience
import { makeStyles } from "@material-ui/core/styles";

export default () => {
  return (
    <div className="navbar ">
      <h1>ATL Black Bean</h1>

      <Link to="/">Home</Link>
      <Link to="/Reviews">Reviews</Link>
    </div>
  );
};
