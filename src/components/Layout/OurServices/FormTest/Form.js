import React, { useEffect, useReducer } from "react";
// import { CSSTransition } from "react-transition-group";
import classes from "./Form.module.css";
import Progress from "./Progress";
import Question from "./Question";
import Answers from "./Answers";
import FormContext from "../../../../context/FormContext";

import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ
} from "../../../../reducers/types";

import formReducer from "../../../../reducers/FormReducer";

const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questions = [
    {
      id: 1,
      question: "What area of the world are you thinking of discovering next?",
      answer_a: "Europe",
      answer_b: "Asia",
      answer_c: "America",
      answer_d: "Australia",
      correct_answer: "b"
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answer_a: "useState()",
      answer_b: "useConst()",
      answer_c: "useReducer()",
      answer_d: "All of the above",
      correct_answer: "b"
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answer_a: "useDataFetching()",
      answer_b: "useApi()",
      answer_c: "useEffect()",
      answer_d: "useRequest()",
      correct_answer: "c"
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

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>;
  };

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }

    return <span className="failed">Failed</span>;
  };

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      );

      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer)}
        </div>
      );
    });
  };

  const restart = () => {
    dispatch({ type: RESET_QUIZ });
  };

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

    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <FormContext.Provider value={{ state, dispatch }}>
        <div className={classes.FormMain}>
          <div className={classes.FormContainer}>
            <Progress total={questions.length} current={currentQuestion + 1} />
            <Question />
            {renderError()}
            <Answers />
            <button className={classes.BtnNext} onClick={next}>
              Next
            </button>
          </div>
        </div>
      </FormContext.Provider>
    );
  }
};

export default Form;
