import React from "react";
import classes from "./Logistics.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Logistics = () => {
  AOS.init({
    duration: 2000
  });

  return (
    <div className={classes.LogisticsContainer}>
      <div className={classes.HeaderContainer} data-aos="fade-up">
        <div className={classes.LogisticsHeader}>
          So how does Hidden Venture work?
        </div>
        <h3 className={classes.LogisticsSecondaryHeader}>
          Follow our 3 main steps to find your next holiday destination
        </h3>
      </div>
      <div className={classes.LogisticsStepsContainer}>
        <div className={classes.LogisticsGrid}>
          <div
            className={classes.LogisticsStep}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className={classes.StepIcon}>
              <i class="fas fa-globe-americas fa-4x"></i>
            </div>
            <div className={classes.LogisticsStepHeader}>
              Choose Your Location
            </div>
            <div className={classes.LogisticsStepText}>
              We provide locations all around the world, simply give us an idea
              of the next area of the world you plan to visit.
            </div>
          </div>
          <div
            className={classes.LogisticsStep}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={classes.StepIcon}>
              <i class="fas fa-map-marked-alt fa-4x"></i>
            </div>
            <div className={classes.LogisticsStepHeader}>Set Your Goals</div>
            <div className={classes.LogisticsStepText}>
              Next, tell us what you want to get most our of your holiday
              experience.
            </div>
          </div>
          <div
            className={classes.LogisticsStep}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className={classes.StepIcon}>
              <i class="fas fa-shoe-prints fa-4x"></i>
            </div>
            <div className={classes.LogisticsStepHeader}>
              Follow the Journey
            </div>
            <div className={classes.LogisticsStepText}>
              Finally, take the leap and book a holiday which you have never
              been to before, we are sure that our unique destinations will
              change your view on travel for the better.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
