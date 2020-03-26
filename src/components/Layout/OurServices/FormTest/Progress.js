import React from "react";

function Progress(props) {
  return (
    <div>
      Question {props.current} of {props.total}
    </div>
  );
}

export default Progress;
