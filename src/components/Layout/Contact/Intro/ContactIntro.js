import React from "react";
import classes from "./ContactIntro.module.css";

const ContactIntro = () => {
  return (
    <div id={classes.Showcase}>
      <div className={classes.ShowcaseContainer}>
        <div className={classes.ShowcaseContent}>
          <h2 className={classes.Header}>We're here to help</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactIntro;
