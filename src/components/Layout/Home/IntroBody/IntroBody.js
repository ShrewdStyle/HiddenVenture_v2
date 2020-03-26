import React from "react";
import classes from "./IntroBody.module.css";
import Landscape from "../../../../assets/Images/main2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroBody = () => {
  AOS.init({
    duration: 2000
  });

  return (
    <div className={classes.BodyContainer}>
      <h2 className={classes.BodyHeader}>What is Hidden Venture?</h2>
      <div className="BottomLine"></div>
      <div className={classes.BodyContent}>
        <div className={classes.BodyText} data-aos="fade-up">
          <h2 className={classes.TextHeader}>
            What makes us different from everyone else?
          </h2>
          <div className={classes.BodyPara}>
            There are an incredible amount of holiday destination services which
            will try and sell you the well known, over priced and over crowded
            holiday locations, we believe that true travel adventures are made
            in the most unexpected destinations. It's our goal to give you a
            truly unique holiday experience by asking you a few basic questions
            on what you plan to achieve, and then providing you with 3 holiday
            locations which you otherwise would never have thought to visit.
          </div>
          <h3 className={classes.BodySubHeader}>Who is Hidden Venture for?</h3>
          <div className={classes.BodyPara}>
            Hidden Venture caters to absolutely everyone, we provide unique
            destinations for people of all ages, families, friends and people
            who enjoy to travel on their own.
          </div>
        </div>
        <div
          className={classes.BodyImgContainer}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <img className={classes.BodyImg} src={Landscape} alt="Landscape" />
        </div>
      </div>
    </div>
  );
};

export default IntroBody;
