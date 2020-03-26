import React, { Fragment, useEffect } from "react";
import Intro from "../Layout/Home/Intro/Intro";
import IntroBody from "../Layout/Home/IntroBody/IntroBody";
import Logistics from "../Layout/Home/Logistics/Logistics";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Intro />
      <IntroBody />
      <Logistics />
    </Fragment>
  );
};

export default Home;
