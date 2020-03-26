import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavbarCurrent.module.css";

const NavbarCurrent = props => {
  return (
    <li className={classes.Current}>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavbarCurrent;
