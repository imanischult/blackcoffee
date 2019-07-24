<<<<<<< HEAD
import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div id="title">
                Black Bean <img src="../public/images/favicon.ico"></img>
            </div>

        
        )
    }
}
=======
import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import Searchbar from "../Searchbar/Searchbar";

const HomePage = () => {
  return (
    <div>
      <IntroInfo />
      <Searchbar />
    </div>
  );
};

export default HomePage;
>>>>>>> f789a2bed2fa3ae2e441b015c0175c3d06a4ac77
