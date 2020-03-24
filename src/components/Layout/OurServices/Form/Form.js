import React, { useEffect, useReducer } from "react";
// import { CSSTransition } from "react-transition-group";
import classes from "./Form.module.css";
import Current from "./Current";
import Question from "./Question";
import Answers from "./Answers";

import formReducer from "../../../../reducers/FormReducer";
import FormContext from "../../../../context/FormContext";

import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_FORM
} from "../../../../reducers/types";

const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questions = [
    {
      id: 1,
      question: "What area of the world are you thinking of discovering next?",
      answer1: "Europe",
      answer2: "Asia",
      answer3: "America",
      answer4: "Australia"
    },
    {
      id: 2,
      question: "Who do you intend to travel with?",
      answer1: "Myself",
      answer2: "My Partner",
      answer3: "My Family",
      answer4: "My Friends"
    },
    {
      id: 3,
      question: "What do you value more?",
      answer1: "Wildlife",
      answer2: "Scenery",
      answer3: "Relaxation",
      answer4: "The Unknown"
    },
    {
      id: 4,
      question: "Are you interested in the history of the area?",
      answer1: "Yes",
      answer2: "No",
      answer3: "Only if i am with other people",
      answer4: "Not Often"
    },
    {
      id: 5,
      question: "Do you feel it's important to live like the locals?",
      answer1: "Yes",
      answer2: "No",
      answer3: "Only if i am alone",
      answer4: "Only for a few days"
    },
    {
      id: 6,
      question: "What makes you happy?",
      answer1: "Nightlife",
      answer2: "Quietness",
      answer3: "Food",
      answer4: "Discovery"
    },
    {
      id: 7,
      question: "Do you like to take risks?",
      answer1: "Yes",
      answer2: "No",
      answer3: "Sometimes",
      answer4: "Only with other people"
    }
  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error: ""
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  const question = questions[currentQuestion];

  // Cycle next question

  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: "Please select an option" });
      return;
    }

    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });

    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1
      });
      return;
    }
  };

  // Cycle previous question

  const previous = () => {
    if (currentQuestion === 0) {
      return;
    } else {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion - 1
      });
      return;
    }
  };

  // SET ERROR

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>;
  };

  const restart = () => {
    dispatch({ type: RESET_FORM });
  };

  console.log(answers);
  console.log(currentAnswer);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <div className={classes.FormMain}>
        <div className={classes.FormContainer}>
          <Current current={currentQuestion + 1} total={questions.length} />
          <Question />
          <Answers />
          <button className={classes.BtnBack} onClick={previous}>
            Back
          </button>
          <button className={classes.BtnNext} onClick={next}>
            Next
          </button>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default Form;
