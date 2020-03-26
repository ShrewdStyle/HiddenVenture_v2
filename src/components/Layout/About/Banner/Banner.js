import React from "react";
import { Link } from "react-router-dom";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.BannerContainer}>
      <div className={classes.BannerText}>
        <h2 className={classes.BannerHeader}>
          <span>“</span>THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ
          ONLY A PAGE.<span>”</span>
        </h2>
        <div className={classes.BannerQuote}>~ SAINT AUGUSTINE</div>
        <Link to="/our-services">
          <button className={classes.BannerBtn}>Click to begin</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
