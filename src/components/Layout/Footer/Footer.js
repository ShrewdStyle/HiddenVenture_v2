import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterHeadings}>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>PLAN YOUR TRIP</div>
            <div className={classes.FooterPoint}>
              Locations around the world
            </div>
            <div className={classes.FooterPoint}>List your goals</div>
            <div className={classes.FooterPoint}>Trips for everyone</div>
          </div>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>
              DESTINATIONS AROUND THE WORLD
            </div>
            <div className={classes.FooterPoint}>Asia</div>
            <div className={classes.FooterPoint}>Europe</div>
            <div className={classes.FooterPoint}>America</div>
            <div className={classes.FooterPoint}>Australia</div>
          </div>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>RESOURCES</div>
            <a
              className={classes.FooterLink}
              href="https://travelaware.campaign.gov.uk/"
              target="_blank"
            >
              <div className={classes.FooterPoint}>Travel Aware website</div>
            </a>
            <a
              className={classes.FooterLink}
              href="https://www.gov.uk/foreign-travel-advice"
              target="_blank"
            >
              <div className={classes.FooterPoint}>
                UK Government travel advice
              </div>
            </a>
          </div>
          <div className={classes.FooterHeader}>
            <div className={classes.FooterTitle}>HELP</div>
            <div className={classes.FooterPoint}>24/7 E-mail support</div>
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
