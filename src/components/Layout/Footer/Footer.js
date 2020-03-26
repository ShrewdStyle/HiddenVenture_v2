import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterHeadings}>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>PLAN YOUR STAY</div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>PLAN YOUR STAY</div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>PLAN YOUR STAY</div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>PLAN YOUR STAY</div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
            <div className={classes.FooterPoint}>
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>
        <div className={classes.SubscribeContainer}>
          <div className={classes.SubscribeHeader}>
            Subscribe to stay tuned for our latest news and updates. No junk,
            spam free.
          </div>
          <div className={classes.SubscribeInput}>
            <input
              className={classes.InputEmail}
              type="email"
              placeholder="Email address"
            />
            <button className={classes.SubscribeBtn}>SIGN UP</button>
          </div>
        </div>
      </div>
      <div className={classes.FooterByContainer}>
        <div className={classes.FooterBy}>
          Designed and Created by <span>Jake Knight</span> &copy;2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;
