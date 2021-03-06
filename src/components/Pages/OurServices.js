import React, { Fragment, useEffect } from "react";
import OurServicesIntro from "../Layout/OurServices/Intro/OurServicesIntro";
import IntroText from "../Layout/OurServices/IntroText/IntroText";
import FormIntro from "../Layout/OurServices/FormIntro/FormIntro";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <OurServicesIntro />
      <IntroText />
      <FormIntro />
    </Fragment>
  );
};

export default OurServices;
