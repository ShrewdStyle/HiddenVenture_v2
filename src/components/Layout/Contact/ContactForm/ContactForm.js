import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [nameState, setNameState] = useState("");
  const [subjectState, setSubjectState] = useState("");
  const [messageState, setMessageState] = useState("");

  const submitHandeler = e => {
    if (nameState !== "" && subjectState !== "" && messageState !== "") {
      return;
    } else {
      e.preventDefault();
      alert("Please enter a valid input");
    }
  };

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
        <form onSubmit={submitHandeler}>
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
            />
            <input
              className={classes.FormTopInput}
              type="text"
              placeholder="Subject"
              value={subjectState}
              onChange={e => {
                setSubjectState(e.target.value);
              }}
            />
          </div>
          <textarea
            name="message"
            className={classes.FormTextArea}
            placeholder="Your message"
            value={messageState}
            onChange={e => {
              setMessageState(e.target.value);
            }}
          ></textarea>
          <button className={classes.FormBtn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
