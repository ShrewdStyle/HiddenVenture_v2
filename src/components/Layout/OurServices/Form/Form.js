import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";
import Current from "./Current";
import Question from "./Question";
import Answers from "./Answers";
import Spinner from "../../../UI/Spinner/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";

import FormLocations from "./api/FormLocations";
import questions from "./api/FormQuestions";

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
  AOS.init({
    duration: 3000
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2800);
    }
  }, [loading]);

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error: ""
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults } = state;

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
    setLoading(!loading);
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };

  // Cycle previous question

  const previous = () => {
    if (currentQuestion === 0) {
      return;
    } else {
      answers.pop();
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion - 1
      });
      return;
    }
  };

  // RETURN RESULTS

  const renderResultsData = () => {
    // EUROPE RESULTS
    const europeLocations = FormLocations[0].europe.sort(
      () => 0.5 - Math.random()
    );
    const europeLocationsSliced = europeLocations.slice(3, 6);
    // ASIA RESULTS
    const asiaLocations = FormLocations[1].asia.sort(() => 0.5 - Math.random());
    const asiaLocationsSliced = asiaLocations.slice(3, 6);
    // AMERICA RESULTS
    const americaLocations = FormLocations[2].america.sort(
      () => 0.5 - Math.random()
    );
    const americaLocationsSliced = americaLocations.slice(3, 6);
    // AUSTRALIA RESULTS
    const australiaLocations = FormLocations[3].australia.sort(
      () => 0.5 - Math.random()
    );
    const australiaLocationsSliced = australiaLocations.slice(3, 6);
    if (answers[0].answer === "a")
      return (
        <ul className={classes.FormResultsList}>
          <li className={classes.ResultsLi}>1. {europeLocationsSliced[0]}</li>
          <li className={classes.ResultsLi}>2. {europeLocationsSliced[1]}</li>
          <li className={classes.ResultsLi}>3. {europeLocationsSliced[2]}</li>
        </ul>
      );
    else if (answers[0].answer === "b")
      return (
        <ul className={classes.FormResultsList}>
          <li className={classes.ResultsLi}>1. {asiaLocationsSliced[0]}</li>
          <li className={classes.ResultsLi}>2. {asiaLocationsSliced[1]}</li>
          <li className={classes.ResultsLi}>3. {asiaLocationsSliced[2]}</li>
        </ul>
      );
    else if (answers[0].answer === "c")
      return (
        <ul className={classes.FormResultsList}>
          <li className={classes.ResultsLi}>1. {americaLocationsSliced[0]}</li>
          <li className={classes.ResultsLi}>2. {americaLocationsSliced[1]}</li>
          <li className={classes.ResultsLi}>3. {americaLocationsSliced[2]}</li>
        </ul>
      );
    else if (answers[0].answer === "d")
      return (
        <ul className={classes.FormResultsList}>
          <li className={classes.ResultsLi}>
            1. {australiaLocationsSliced[0]}
          </li>
          <li className={classes.ResultsLi}>
            2. {australiaLocationsSliced[1]}
          </li>
          <li className={classes.ResultsLi}>
            3. {australiaLocationsSliced[2]}
          </li>
        </ul>
      );
  };

  const restart = () => {
    dispatch({ type: RESET_FORM });
  };

  if (loading) return <Spinner />;

  if (showResults) {
    return (
      <div className={classes.ResultsForm1}>
        <div className={classes.ResultsContainer1}>
          <h2 className={classes.ResultsHeader}>Our Top 3 Results</h2>
          <div>{renderResultsData()}</div>
          <div className={classes.ResultsText}>
            If you have any questions or queries click the contact button below
            and we will be happy to answer them for you, alternatively click the
            restart button to answer again.
          </div>
          <Link to="/contact">
            <button className={classes.FormResetBtn}>Contact Us</button>
          </Link>
          <button className={classes.FormResetBtn} onClick={restart}>
            Restart
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <FormContext.Provider value={{ state, dispatch }}>
        <div className={classes.FormMain}>
          <div
            className={classes.FormContainer}
            data-aos="fade"
            data-aos-delay="400"
          >
            <Current current={currentQuestion + 1} total={questions.length} />
            <Question />
            <Answers />
            <div className={classes.BtnContainer}>
              <button className={classes.BtnBack} onClick={previous}>
                Back
              </button>
              <button className={classes.BtnNext} onClick={next}>
                {currentQuestion <= 5 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      </FormContext.Provider>
    );
  }
};
export default Form;
