import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");

  console.log(nameState);

  return (
    <div className={classes.ContactFormContainer}>
      <div className={classes.ContactTextContainer}>
        <div className={classes.FormIntro}>Contact us</div>
        <div className={classes.FormHeader}>
          Have some questions? Get in touch
        </div>
        <div className={classes.FormText}>
          If you have any questions or queries on your holiday destinations,
          feel free to send us a message and our team will respond back to you
          asap. We are always happy to give any advice we can to help with your
          holiday experience.
        </div>
      </div>
      <div className={classes.FormContainer}>
        <form>
          <div className={classes.TopRowInput}>
            <input
              className={classes.FormTopInput}
              type="text"
              placeholder="Your name"
              value={nameState}
              onChange={e => {
                setNameState(e.target.value);
              }}
            />
            <input
              className={classes.FormTopInput}
              type="email"
              placeholder="Your email"
              value={emailState}
              onChange={e => {
                setEmailState(e.target.value);
              }}
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
