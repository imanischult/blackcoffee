import React from "react";
import "./IntroInfo.css";
// import logo from "./images/coffee-logo.svg";

function IntroInfo() {
  return (
    <div id="intro" className="container">
      <br />
      {/* <h1 id="intro">
        Welcome to BLACK <img src={logo} height="90" width="90" alt="Logo" />
      </h1> */}
      <p>
        Here in Atlanta, we pride ourselves on the diverse culture that the
        booming economy has created for its residents. No matter which area of
        the ATL you happen to find yourself in, it is almost guaranteed that you
        will find some hidden treasure that offers moderness, history, and a
        taste of Atlanta culture that is unlike any other city.
        <br />
        <br />
        BLACK aims to shed light on some of the hidden pockets of culture that
        we may have otherwise missed. We begin with Atlanta's variety of black
        owned coffee shops. Use the search tool below to find coffee shops by
        name, location, or coffee type.
      </p>
    </div>
  );
}

export default IntroInfo;
