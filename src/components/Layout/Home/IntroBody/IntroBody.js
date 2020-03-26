<<<<<<< HEAD
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            doloribus ut placeat. Praesentium sapiente, incidunt consequatur hic
            exercitationem nihil tempore laudantium sint nemo! Repellendus dolor
            veritatis, dolores optio quidem maiores asperiores tenetur officiis
            nesciunt. Quos, deserunt! Earum ducimus dolor minus qui, odit ullam
            beatae ipsum, necessitatibus iusto molestiae asperiores a.
          </div>
          <h3 className={classes.BodySubHeader}>Who is Hidden Venture for?</h3>
          <div className={classes.BodyPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quae natus consequuntur alias sed eligendi consectetur a rerum
            minima quos, mollitia ducimus illo nesciunt perferendis!
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
=======
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            doloribus ut placeat. Praesentium sapiente, incidunt consequatur hic
            exercitationem nihil tempore laudantium sint nemo! Repellendus dolor
            veritatis, dolores optio quidem maiores asperiores tenetur officiis
            nesciunt. Quos, deserunt! Earum ducimus dolor minus qui, odit ullam
            beatae ipsum, necessitatibus iusto molestiae asperiores a.
          </div>
          <h3 className={classes.BodySubHeader}>Who is Hidden Venture for?</h3>
          <div className={classes.BodyPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quae natus consequuntur alias sed eligendi consectetur a rerum
            minima quos, mollitia ducimus illo nesciunt perferendis!
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
>>>>>>> 6bf5347e744296b9209f0489c7500aebc7eff1f9
