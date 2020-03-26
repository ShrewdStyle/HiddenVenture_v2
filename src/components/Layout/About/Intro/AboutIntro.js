import React, { Fragment } from "react";
import classes from "./AboutIntro.module.css";

const AboutIntro = () => {
  return (
    <Fragment>
      <div id={classes.Showcase}>
        <div className={classes.ShowcaseContainer}>
          <div className={classes.ShowcaseContent}>
            <h2 className={classes.Header}>Unique travel starts with us</h2>
          </div>
        </div>
      </div>
      <div className={classes.AboutTextContainer}>
        <h3 className={classes.TextHeader}>
          Since 2019, Hidden Venture has been revolutionising the travel
          industry. Unique locations based on your choices.
        </h3>
        <div className={classes.TextBody}>
          Hidden Venture is a free travel advice company, we believe that
          everyone should be able to travel, and we have found that it's the
          unexpected locations which are the most memorable.
        </div>
        <div className={classes.TextBody}>
          We provide destinations all around the world and take into account
          your holiday goals, who you intend to travel with and in what area of
          the world you would like to travel.
        </div>
      </div>
    </Fragment>
  );
};

export default AboutIntro;
