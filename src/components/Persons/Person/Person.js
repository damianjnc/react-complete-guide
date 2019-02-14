import React from 'react';
import  classes from './Person.css';
//import Radium from 'radium'; 

const person = (props) => {
    console.log('[Persons.js] rendering...');
   /*
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }; 
    */


    return (
        <div className={classes.Person} /*style={style}*/ >
           <p onClick={props.click}>I am {props.name}! I am {props.age}</p>
           <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />

        </div>

    );
};

export default /*Radium()*/person;