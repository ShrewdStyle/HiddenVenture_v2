import React from "react";
import { SET_CURRENT_ANSWER, SET_ERROR } from "../../../../reducers/types";
import classes from "./Answer.module.css";

const Answer = props => {
  let choice = ["answer"];

  const answerHandeler = e => {
    props.dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: e.target.value
    });
    props.dispatch({ type: SET_ERROR, error: "" });
  };

  if (props.selected) {
    choice.push("selected");
  }
  return (
    <button
      value={props.letter}
      className={classes.ChoiceBtn}
      onClick={answerHandeler}
    >
      {props.answer}
    </button>

    // <label
    //   value={props.letter}
    //   name="selectedAnswer"
    //   className={classes.AnswerChoice}
    // >
    //   <input
    //     value={props.letter}
    //     type="radio"
    //     onClick={answerHandeler}
    //     name="selectedAnswer"
    //   />
    //   {props.answer}
    // </label>
  );
};

export default Answer;
