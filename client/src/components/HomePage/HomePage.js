import React from "react";
import IntroInfo from "../IntroInfo/IntroInfo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "./Button.js";

const HomePage = () => {
  return (
    <div>
      <IntroInfo />
      <Searchbar />
      <Button />
    </div>
  );
};

export default HomePage;
