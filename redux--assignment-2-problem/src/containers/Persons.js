import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../actions";

class Persons extends Component {
  personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "Max",
      age: Math.floor(Math.random() * 40),
    };
    this.setState((prevState) => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeletedHandler = (personId) => {
    this.setState((prevState) => {
      return {
        persons: prevState.persons.filter((person) => person.id !== personId),
      };
    });
  };

  render() {
    return (
      <div>
        <AddPerson
          personAdded={() => {
            this.props.onPersonAdd();
          }}
        />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdd: (person) => dispatch({ type: actionTypes.ADD_PERSON }),
    onPersonDelete: (id) =>
      dispatch({ type: actionTypes.DELETE_PERSON, id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
