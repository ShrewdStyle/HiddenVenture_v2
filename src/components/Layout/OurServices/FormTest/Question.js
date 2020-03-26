import React, { useContext } from "react";
import FormContext from "../../../../context/FormContext";

function Question() {
  const { state } = useContext(FormContext);
  const { currentQuestion, questions } = state;
  const question = questions[currentQuestion];
  return <h1>{question.question}</h1>;
}

export default Question;
