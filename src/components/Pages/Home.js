import React, { Fragment } from "react";
import Intro from "../Layout/Home/Intro/Intro";
import IntroBody from "../Layout/Home/IntroBody/IntroBody";
import Logistics from "../Layout/Home/Logistics/Logistics";

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <IntroBody />
      <Logistics />
    </Fragment>
  );
};

export default Home;
