import React from "react";

const validationComponent = (props) => {
  return props.textLength < 5 ? <p>Too short</p> : <p>Text long enough</p>;
};

export default validationComponent;
