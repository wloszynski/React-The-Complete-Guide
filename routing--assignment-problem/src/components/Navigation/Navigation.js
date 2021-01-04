import React from "react";
import { NavLink } from "react-router-dom";

const navigation = (props) => {
  return (
    <div>
      <NavLink to="/users">Users</NavLink>
      <span>-------------------------</span>
      <NavLink to="/courses">Courses</NavLink>
    </div>
  );
};

export default navigation;
