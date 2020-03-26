import React, { Fragment, useEffect } from "react";
import AboutIntro from "../Layout/About/Intro/AboutIntro";
import Cards from "../Layout/About/Cards/Cards";
import Banner from "../Layout/About/Banner/Banner";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <AboutIntro />
      <Cards />
      <Banner />
    </Fragment>
  );
};

export default About;
