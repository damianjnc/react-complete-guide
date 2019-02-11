import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'iiifd3', name: 'damian22', age: 999},
      {id:'iiifd34' , name: 'alex', age: 44},
      {id:'iiifd5' , name: 'stefani', age: 62},
     ],
     otherState: 'some other value',
     showPersons: false 
  }

  nameChangedHandler = (event, id) => {
      this.setState({
          persons: [
              {name: 'Max', age: 6666},
              {name: event.target.value, age: 44},
              {name: 'stefaniiii', age: 62},
          ]
      });
  }
  deletePersonHandler = (personIndex) => {
 //   const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
      const myStyleObjectProps = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    let persons = null;
    if(this.state.showPersons){
      persons = (       
      <div>
        {this.state.persons.map( (el, index) => {
          return <Person 
          click={ () => this.deletePersonHandler(index)}
          name ={el.name} 
          age={el.age}
          key = {el.id}
          changed = {this.nameChangedHandler}  /> 
        })}
        
      </div> 
      );

    }
    return (
      <div className="App">
        <h1>Hi, it's react app. </h1>
        <button
            style={myStyleObjectProps}
            onClick={this.togglePersonsHandler}>Switch name!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
