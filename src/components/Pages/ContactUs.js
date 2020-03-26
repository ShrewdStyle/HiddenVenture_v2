import React, { Fragment, useEffect } from "react";
import ContactIntro from "../Layout/Contact/Intro/ContactIntro";
import ContactForm from "../Layout/Contact/ContactForm/ContactForm";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <ContactIntro />
      <ContactForm />
    </Fragment>
  );
};

export default ContactUs;
