import React from "react";
import NavbarCurrent from "./NavbarCurrent";
import classes from "./Navbar.module.css";
import Logo from "../../Logo/hidden-venture-logo.PNG";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.NavbarContainer}>
      <ul className={classes.Navbar}>
        <Link to="/">
          <img className={classes.Logo} src={Logo} alt="Hidden Venture" />
        </Link>
        <div className={classes.SocialNav}>
          <a
            className={classes.SocialIcon}
            href="https://www.linkedin.com/in/jake-knight-811240b1/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div className={classes.SocialNav}>
          <a
            className={classes.SocialIcon}
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/explore"
          >
            <i class="fab fa-twitter-square fa-2x"></i>
          </a>
        </div>
        <div className={classes.SocialNav}>
          <a
            className={classes.SocialIcon}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/"
          >
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <div className={classes.SocialNav}>
          <a
            className={classes.SocialIcon}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/"
          >
            <i class="fab fa-instagram-square fa-2x"></i>
          </a>
        </div>
        <li>
          <NavbarCurrent link="/">Home</NavbarCurrent>
        </li>
        <li>
          <NavbarCurrent link="/our-services">Our Services</NavbarCurrent>
        </li>
        <li>
          <NavbarCurrent link="/about">About</NavbarCurrent>
        </li>
        <li>
          <NavbarCurrent link="/contact">Contact</NavbarCurrent>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
