import React from 'react';
import './Person.css';
import Radium from 'radium';

// , { Component }
// class Person extends Component {
//   constructor() {
//
//   }
// }

const Person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
      backgroundColor: 'lightblue'
    }
  }
  return (
    <div className="person" style={style}>
      <h2 onClick={props.click}>I'm {props.name} my lucky number is {Math.floor(Math.random() * 30)}</h2>
      {props.children}
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
};

export default Radium(Person);
