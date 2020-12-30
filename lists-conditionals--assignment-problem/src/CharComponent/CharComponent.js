import React from "react";
import "./CharComponent.css";
const charComponent = (props) => {
  return (
    <div onClick={props.click} className="charComponent">
      {props.letter}
    </div>
  );
};

export default charComponent;
