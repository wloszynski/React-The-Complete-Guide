import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Adrian",
        age: 20,
      },
      { name: "Kamila", age: 20 },
      { name: "Tim", age: 34 },
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Adrian",
          age: 20,
        },
        { name: event.target.value, age: 20 },
        { name: "Tim", age: 21 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
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
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "TimTim")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Kotkies
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
