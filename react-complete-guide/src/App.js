import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => (props.myAlt ? "red" : "green")};
  font: inherit;
  color: white;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.myAlt ? "salmon" : "lightgreen")};
    color: black;
  }
`;
class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Adrian",
        age: 20,
      },
      { id: 2, name: "Kamila", age: 20 },
      { id: 3, name: "Tim", age: 21 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // Don't do this
  //   // this.state.persons[0].name = "Adi";

  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 20,
  //       },
  //       { name: "Kamila", age: 20 },
  //       { name: "Tim", age: 21 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.state.showPersons
      ? this.setState({ showPersons: false })
      : this.setState({ showPersons: true });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => {
                  this.nameChangedHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          myAlt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
