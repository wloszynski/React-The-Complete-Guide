import React from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        myAlt={props.showPersons}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
