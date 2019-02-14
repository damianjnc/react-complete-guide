import React, { Component  } from 'react';
import  classes from './Person.css';
//import Radium from 'radium'; 

class Person extends Component {

    render(){
        console.log('[Persons.js] rendering...');
        return (
            <div className={classes.Person} >
               <p onClick={this.props.click}>I am {this.props.name}! I am {this.props.age}</p>
               <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    } 
}

export default Person;