import React from "react";
import "./IntroInfo.css";
// import logo from "./images/coffee-logo.svg";

function IntroInfo() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div id="intro">
            <br />
            <h3 id="introPar">
              Here in Atlanta, we pride ourselves on the diverse culture that
              the booming economy has created for its residents. No matter which
              area of the ATL you happen to find yourself in, it is almost
              guaranteed that you will find some hidden treasure that offers
              moderness, history, and a taste of Atlanta culture that is unlike
              any other city.
              <br />
              <br />
              BLACK aims to shed light on some of the hidden pockets of culture
              that we may have otherwise missed. We begin with Atlanta's variety
              of black owned coffee shops. Use the search tool below to find
              coffee shops by name, location, or coffee type.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroInfo;
