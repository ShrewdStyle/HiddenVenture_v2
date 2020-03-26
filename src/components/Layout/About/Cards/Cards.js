import React from "react";
import classes from "./Cards.module.css";

const Cards = () => {
  return (
    <section id={classes.Cards}>
      <div className={classes.CardsContainer}>
        <div className={classes.CardsTextContainer}>
          <h3 className={classes.CardsHeader}>
            Hidden Venture by the numbers.
          </h3>
          <div className={classes.CardsBody}>
            Our passion for data informs everything we do. Every team member at
            Hidden Venture knows our business inside and out, down to the
            numbers.
          </div>
          <div className={classes.CardsStat}>1,000,000 +</div>
          <div className={classes.CardsBody}>
            Queries across our platform each year with locations all around the
            world.
          </div>
          <div className={classes.CardsGrid}>
            <div id={classes.AsiaCard}>
              <div className={classes.CardContentContainer}>
                <div className={classes.CardContent}>Asia</div>
              </div>
            </div>
            <div id={classes.EuropeCard}>
              <div className={classes.CardContentContainer}>
                <div className={classes.CardContent}>Europe</div>
              </div>
            </div>
            <div id={classes.AmericaCard}>
              <div className={classes.CardContentContainer}>
                <div className={classes.CardContent}>America</div>
              </div>
            </div>
            <div id={classes.AustraliaCard}>
              <div className={classes.CardContentContainer}>
                <div className={classes.CardContent}>Australia</div>
              </div>
            </div>
            <div id={classes.GoalCard}>
              <div className={classes.CardContentContainer}>
                <div className={classes.CardContent}>
                  Choose what you value most
                </div>
              </div>
            </div>
            <div id={classes.MemberCard}>
              <div className={classes.CardContentContainer}>
                <div className={classes.CardContent}>
                  Choose who you travel with
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
