<<<<<<< HEAD
import React from "react";
import NavbarCurrent from "./NavbarCurrent";
import classes from "./Navbar.module.css";
import Logo from "../../Logo/hidden-venture-logo.PNG";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className={classes.Navbar}>
      <Link to="/">
        <img className={classes.Logo} src={Logo} alt="Hidden Venture" />
      </Link>
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
  );
};

export default Navbar;
=======
import React from "react";
import NavbarCurrent from "./NavbarCurrent";
import classes from "./Navbar.module.css";
import Logo from "../../Logo/hidden-venture-logo.PNG";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className={classes.Navbar}>
      <Link to="/">
        <img className={classes.Logo} src={Logo} alt="Hidden Venture" />
      </Link>
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
  );
};

export default Navbar;
>>>>>>> 6bf5347e744296b9209f0489c7500aebc7eff1f9
