import React, { Fragment } from "react";
import { SET_CURRENT_ANSWER, SET_ERROR } from "../../../../reducers/types";
import classes from "./Answer.module.css";

function Answer(props) {
  let classes = ["answer"];

  const handleClick = e => {
    props.dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: e.target.value
    });
    props.dispatch({ type: SET_ERROR, error: "" });
  };

  if (props.selected) {
    classes.push("selected");
  }
  return (
    <Fragment>
      <div className={classes.FormAnswer}>
        <input value={props.letter} onClick={handleClick} type="radio" />
        <label>
          <span>{props.letter}.</span> {props.answer}
        </label>
      </div>
    </Fragment>
  );
}

export default Answer;
