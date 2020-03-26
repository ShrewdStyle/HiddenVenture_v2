import React from "react";

const Current = props => {
  return (
    <div className="currentQuestion">
      Question <span>{props.current}</span> of <span>{props.total}</span>
    </div>
  );
};

export default Current;
