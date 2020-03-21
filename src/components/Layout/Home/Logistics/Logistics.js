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
          Lorem ipsum dolor, sit amet consectetur adipisicing.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nesciunt ab quibusdam impedit nobis quis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nesciunt ab quibusdam impedit nobis quis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nesciunt ab quibusdam impedit nobis quis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
