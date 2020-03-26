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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, in?
        </h3>
        <div className={classes.TextBody}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          repellat alias dolor cumque voluptate officiis eius assumenda. Amet ea
          voluptate provident hic, excepturi sed est voluptas fuga vel, eaque,
          aliquid ab laborum quis blanditiis qui quia! Nam velit laboriosam
          eaque obcaecati! Repellendus facere sit expedita fugiat sapiente quas
          et nam.
        </div>
        <div className={classes.TextBody}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          repellat alias dolor cumque voluptate officiis eius assumenda. Amet ea
          voluptate provident hic, excepturi sed est voluptas fuga vel, eaque,
          aliquid ab laborum quis blanditiis qui quia! Nam velit laboriosam
          eaque obcaecati! Repellendus facere sit expedita fugiat sapiente quas
          et nam.
        </div>
      </div>
    </Fragment>
  );
};

export default AboutIntro;
