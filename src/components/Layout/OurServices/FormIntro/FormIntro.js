import React from "react";
import classes from "./FormIntro.module.css";
import { Link } from "react-router-dom";

const FormIntro = () => {
  return (
    <div className={classes.FormContainer}>
      <div className={classes.ButtonContainer}>
        <div className={classes.BeginHeader}>
          To begin, click the button below
        </div>
        <Link to="/our-services/venture">
          <button className={classes.StartBtn}>Start Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FormIntro;
