import React, { useContext } from "react";
import FormContext from "../../../../context/FormContext";

const Question = () => {
  const { state } = useContext(FormContext);
  const { currentQuestion, questions } = state;
  const question = questions[currentQuestion];
  return <div className="formQuestions">{question.question}</div>;
};

export default Question;
