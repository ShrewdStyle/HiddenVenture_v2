<<<<<<< HEAD
import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={classes.ContactFormContainer}>
      <div className={classes.ContactTextContainer}>
        <div className={classes.FormIntro}>Contact us</div>
        <div className={classes.FormHeader}>
          Have some questions? Get in touch
        </div>
        <div className={classes.FormText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nobis
          labore temporibus provident laboriosam, illo optio. Nulla veritatis
          sapiente sint ad dolore saepe dolores error ab, id quam debitis at
          delectus voluptate nam rem autem placeat quaerat minus deleniti cum.
          Nihil cumque maxime incidunt dignissimos?
        </div>
      </div>
      <div className={classes.FormContainer}>
        <form>
          <div className={classes.TopRowInput}>
            <input
              className={classes.FormTopInput}
              type="text"
              placeholder="Your name"
            />
            <input
              className={classes.FormTopInput}
              type="email"
              placeholder="Your email"
            />
            <input
              className={classes.FormTopInput}
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            name="message"
            className={classes.FormTextArea}
            placeholder="Your message"
          ></textarea>
          <button className={classes.FormBtn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
=======
import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={classes.ContactFormContainer}>
      <div className={classes.ContactTextContainer}>
        <div className={classes.FormIntro}>Contact us</div>
        <div className={classes.FormHeader}>
          Have some questions? Get in touch
        </div>
        <div className={classes.FormText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nobis
          labore temporibus provident laboriosam, illo optio. Nulla veritatis
          sapiente sint ad dolore saepe dolores error ab, id quam debitis at
          delectus voluptate nam rem autem placeat quaerat minus deleniti cum.
          Nihil cumque maxime incidunt dignissimos?
        </div>
      </div>
      <div className={classes.FormContainer}>
        <form>
          <div className={classes.TopRowInput}>
            <input
              className={classes.FormTopInput}
              type="text"
              placeholder="Your name"
            />
            <input
              className={classes.FormTopInput}
              type="email"
              placeholder="Your email"
            />
            <input
              className={classes.FormTopInput}
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            name="message"
            className={classes.FormTextArea}
            placeholder="Your message"
          ></textarea>
          <button className={classes.FormBtn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
>>>>>>> 6bf5347e744296b9209f0489c7500aebc7eff1f9
