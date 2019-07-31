import React from "react";
// replaces <a> tag with react's Link to prevent the page from refreshing
import { Link } from "react-router-dom";
import "./Navbar.css";
//including for convienience
import { makeStyles } from "@material-ui/core/styles";

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'fonts.googleapis.com/css?family=Cabin+Sketch');
document.head.appendChild(link);

export default () => {
  return (
    <div className="navbar ">
      <a id="home" href="/">Home</a>
      <a id="review" href="/Reviews">Reviews</a>
    </div>
  );
};
