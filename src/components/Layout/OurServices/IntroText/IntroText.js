import React from "react";
import classes from "./IntroText.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroText = () => {
  AOS.init({
    duration: 2000
  });

  return (
    <div className={classes.IntroServicesTextContainer}>
      <div className={classes.ServicesWelcomeContainer}>
        <div className={classes.WelcomeHeader} data-aos="fade-up">
          Welcome to <br /> Hidden <span>V</span>enture
        </div>
        <div
          className={classes.VerticalLine}
          data-aos="fade-up"
          data-aos-delay="150"
        ></div>
        <div
          className={classes.WelcomeText}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Below you will be directed to our location form where you will be
          asked 7 questions and with your answers we will be able to provide you
          with 3 unique locations which we think will best suit your travel
          requirements. Feel free to contact us for any further information or
          advice, as always we will be happy to help.
        </div>
      </div>
      <div className={classes.IntroTextContainer}>
        <div className={classes.IntroHeader} data-aos="fade-up">
          Before you begin, read the instructions below
        </div>
        <div className={classes.BottomLineLight} data-aos="fade-up"></div>
        <div
          className={classes.Instructions}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div
            className={classes.Instruction}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            You will be asked a series of 7 questions
          </div>
          <div
            className={classes.Instruction}
            data-aos="fade-up"
            data-aos-delay="750"
          >
            All answers will be anonymous
          </div>
          <div
            className={classes.Instruction}
            data-aos="fade-up"
            data-aos-delay="750"
          >
            We will use your answers to provide you with 3 unique locations
            around the world
          </div>
          <div
            className={classes.Instruction}
            data-aos="fade-up"
            data-aos-delay="750"
          >
            Please answer honestly
          </div>
          <div
            className={classes.Instruction}
            data-aos="fade-up"
            data-aos-delay="750"
          >
            If you have any questions, feel free to contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
