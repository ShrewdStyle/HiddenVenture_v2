<<<<<<< HEAD
import React, { useContext, Fragment } from "react";
import Answer from "./Answer";
import FormContext from "../../../../context/FormContext";

const Answers = () => {
  const { state, dispatch } = useContext(FormContext);
  const { currentAnswer, currentQuestion, questions } = state;
  const question = questions[currentQuestion];

  return (
    <Fragment>
      <Answer
        answer={question.answer1}
        dispatch={dispatch}
        letter="a"
        selected={currentAnswer === "a"}
      />
      <Answer
        answer={question.answer2}
        dispatch={dispatch}
        letter="b"
        selected={currentAnswer === "b"}
      />
      <Answer
        answer={question.answer3}
        dispatch={dispatch}
        letter="c"
        selected={currentAnswer === "c"}
      />
      <Answer
        answer={question.answer4}
        dispatch={dispatch}
        letter="d"
        selected={currentAnswer === "d"}
      />
    </Fragment>
  );
};

export default Answers;
=======
import React, { useContext, Fragment } from "react";
import Answer from "./Answer";
import FormContext from "../../../../context/FormContext";

const Answers = () => {
  const { state, dispatch } = useContext(FormContext);
  const { currentAnswer, currentQuestion, questions } = state;
  const question = questions[currentQuestion];

  return (
    <Fragment>
      <Answer
        answer={question.answer1}
        dispatch={dispatch}
        letter="a"
        selected={currentAnswer === "a"}
      />
      <Answer
        answer={question.answer2}
        dispatch={dispatch}
        letter="b"
        selected={currentAnswer === "b"}
      />
      <Answer
        answer={question.answer3}
        dispatch={dispatch}
        letter="c"
        selected={currentAnswer === "c"}
      />
      <Answer
        answer={question.answer4}
        dispatch={dispatch}
        letter="d"
        selected={currentAnswer === "d"}
      />
    </Fragment>
  );
};

export default Answers;
>>>>>>> 6bf5347e744296b9209f0489c7500aebc7eff1f9
