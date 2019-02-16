import React, { Component  } from 'react';
import  classes from './Person.css';
import Auxillary from '../../../hoc/Auxillary';
//import Radium from 'radium'; 

class Person extends Component {

    render(){
        console.log('[Persons.js] rendering...');
        return (
        <Auxillary>
               <p key='i1' onClick={this.props.click}>I am {this.props.name}! I am {this.props.age}</p>
               <p key='i2'>{this.props.children}</p>
                <input key='i3' type='text' onChange={this.props.changed} value={this.props.name} />
        </Auxillary>
        );
    }
}

export default Person;