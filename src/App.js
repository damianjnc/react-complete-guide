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

  switchNameHandler = (newName) => {
   // console.log('Was clicked!');
      this.setState({
          persons: [
              {name: newName, age: 6666},
              {name: 'alex', age: 44},
              {name: 'stefaniiii', age: 62},
          ]
      });
  }

  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Max', age: 6666},
              {name: event.target.value, age: 44},
              {name: 'stefaniiii', age: 62},
          ]
      });
  }

  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'


      };
    return (
      <div className="App">
        <h1>Hi, it's react app. </h1>
        <button
            style={style}
            onClick={(event) =>  this.switchNameHandler('Maximilian!!!')}>Switch name!
        </button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
        />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'lula')}
            changed = {this.nameChangedHandler}
        >My hobbies: racing
        </Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
