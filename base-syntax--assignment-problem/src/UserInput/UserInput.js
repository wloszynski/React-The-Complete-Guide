import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div>
      <input
        type="text"
        className="UserInput"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default UserInput;
