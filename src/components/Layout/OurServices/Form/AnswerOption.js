import React from "react";
import classes from "./AnswerOption.module.css";

const AnswerOption = props => {
  return (
    <li className={classes.AnswerOption}>
      <input
        type="radio"
        className={classes.RadioCustomButton}
        name="radioGroup"
        checked={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className={classes.RadioCustomLabel} htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
};

export default AnswerOption;
