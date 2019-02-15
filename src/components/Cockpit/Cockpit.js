import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        setTimeout( () => {
            alert('Save data to the cloud!');
        }, 2000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
        }, []);

    useEffect( () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    });

    const assignedClasses =[];
    let btnClass =''; 
    if(props.showPersons){
      btnClass = classes.Red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{ props.appTitle} </h1>
            <p className={assignedClasses.join('  ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Switch name!
            </button>
        </div>

    );
};

export default cockpit;