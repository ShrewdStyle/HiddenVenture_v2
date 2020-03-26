<<<<<<< HEAD
import React from "react";
import classes from "./Intro.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <header id={classes.Showcase}>
      <div className={classes.ShowcaseContainer}>
        <div className={classes.ShowcaseContent}>
          <div className={classes.Header}>
            Venture off the track and find something truly unique
          </div>
          <div className={classes.HeaderBody}>
            Our trips are born out of a desire to share an authentic travel
            experience. We provide tailor-made journeys designed with your
            interests, tastes and location, with destinations throughout Asia,
            Australia, Europe and America.
          </div>
          <Link to="/our-services">
            <button className={classes.BtnMain}>Start Your Escape</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Intro;
=======
import React from "react";
import classes from "./Intro.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <header id={classes.Showcase}>
      <div className={classes.ShowcaseContainer}>
        <div className={classes.ShowcaseContent}>
          <div className={classes.Header}>
            Venture off the track and find something truly unique
          </div>
          <div className={classes.HeaderBody}>
            Our trips are born out of a desire to share an authentic travel
            experience. We provide tailor-made journeys designed with your
            interests, tastes and location, with destinations throughout Asia,
            Australia, Europe and America.
          </div>
          <Link to="/our-services">
            <button className={classes.BtnMain}>Start Your Escape</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Intro;
>>>>>>> 6bf5347e744296b9209f0489c7500aebc7eff1f9
