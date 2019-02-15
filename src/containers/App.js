import React, { Component } from 'react';
import  classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'iiifd3', name: 'damian22', age: 999},
      {id:'iiifd34' , name: 'alex', age: 44},
      {id:'iiifd5' , name: 'stefani', age: 62},
     ],
     otherState: 'some other value',
     showPersons: false 
  } 

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

 // componentWillMount(){
 //   console.log('[App.js] componentWillMount');
 // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('[App.js] shouldComponentUpdate');
      return true;
  }

  componentDidUpdate() {
      console.log('[App.js] componentDidUpdae');
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
  deletePersonHandler = personIndex => {
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
    console.log('[App.js] render');
    let persons = null;

     
    if(this.state.showPersons){
      persons =   
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />;
    }

    return (
    
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons }
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
     

    );
  }
}

export default App;
