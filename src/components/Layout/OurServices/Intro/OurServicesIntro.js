import React from "react";
import classes from "./OurServicesIntro.module.css";

const OurServicesIntro = () => {
  return (
    <div id={classes.Showcase}>
      <div className={classes.ShowcaseContainer}>
        <div className={classes.ShowcaseContent}>
          <div className={classes.Header}>What We Offer</div>
          <div className={classes.HeaderBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, doloribus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesIntro;
