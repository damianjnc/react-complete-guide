import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }
    
    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map( (el, index) => {
            return (
            <Person 
                click={ () => this.props.clicked(index)}
                name ={el.name} 
                age={el.age} 
                key = {el.id}
                changed = {(event) => this.props.changed(event, el.id)}  />
            );
        });
    }


}
    export default Persons;