import React from 'react';

import Person from './Person/Person';

const persons = props => {
    console.log('[Persons.js] rendering...');
    return props.persons.map( (el, index) => {
        return (
        <Person 
            click={ () => props.clicked(index)}
            name ={el.name} 
            age={el.age}
            key = {el.id}
            changed = {(event) => props.changed(event, el.id)}  />
        );
    });
};
    export default persons;