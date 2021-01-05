import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
    clickedId: null,
  };

  courseClickHandler = (id) => {
    this.setState({ clickedId: id });
  };

  render() {
    let courses = (
      <section className="Courses">
        {this.state.courses.map((course) => {
          return (
            <Link
              key={course.id}
              onClick={() => {
                this.courseClickHandler(course.id);
              }}
              to={"/course/" + course.id}
              className="Course"
            >
              {course.title}
            </Link>
          );
        })}
      </section>
    );
    if (this.state.clickedId) {
      const course = this.state.courses[this.state.clickedId - 1];

      courses = (
        <section className="Courses">
          <Link
            onClick={() => {
              this.courseClickHandler(course.id);
            }}
            to={"/course/" + course.id}
            className="Course"
            key={course.id}
          >
            {course.title}
          </Link>
        </section>
      );
    }
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        {courses}
      </div>
    );
  }
}

export default Courses;
