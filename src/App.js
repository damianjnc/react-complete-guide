import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'damian22', age: 999},
      {name: 'alex', age: 44},
      {name: 'stefani', age: 62},
     ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, it's react app. </h1>
        <button onClick={this.switchNameHandler}>Switch name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  >My hobbies: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
      </div>
    );
  }
}

export default App;
