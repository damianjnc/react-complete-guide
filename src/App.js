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
      const personIndex = this.state.persons.findIndex(el => {
          return el.id === id;
      });
      const person = { ...this.state.persons[personIndex]};
      // const person = Object.assign({), this.state.persons[personIndex]);
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
          persons: persons
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
          backgroundColor: '#0984e3',
          font: 'inherit',
          border: '1px solid #0984e3',
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
          changed = {(event) => this.nameChangedHandler(event, el.id)}  />
        })}
        
      </div> 
      );
        myStyleObjectProps.backgroundColor= '#74b9ff';
    }
    let classes =[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
    
      <div className="App">
        <h1>Hi, it's react app. </h1>
        <p className={classes.join('  ')}>This is really working!</p>
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
