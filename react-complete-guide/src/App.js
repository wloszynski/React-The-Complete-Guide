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
  };

  switchNameHandler = (newName) => {
    // Don't do this
    // this.state.persons[0].name = "Adi";

    this.setState({
      persons: [
        {
          name: newName,
          age: 20,
        },
        { name: "Kamila", age: 20 },
        { name: "Tim", age: 21 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler("Adi")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "TimTim")}
        >
          My Hobbies: Kotkies
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );
  }
}

export default App;
