import React, { Component, Fragment } from 'react';
import classes from './Person.css';
// import Radium from 'radium';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth_context';


// , { Component }
// class Person extends Component {
//   constructor() {
//
//   }
// }

class Person extends Component  {

  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext
  // const style = {
  //   //  radium styling '@media (min-width: 500px)': {
  //   //   width: '450px',
  //   //   backgroundColor: 'lightblue'
  //   // }
  // }
  // const random = Math.random();
  //
  // if (random < 0.1) {
  //   throw new Error("Something Went wrong !")
  // }

  componentDidMount() {
    this.inputElementRef.current.focus()
  }

  render () {
    console.log("person rendering")
    return (
      <Fragment>
        {this.context.authenticated ? <p>Logged In</p> : <p>Please login</p>}
        <h2 onClick={this.props.click}>I'm {this.props.name} my lucky number is {Math.floor(Math.random() * 30)}</h2>
        {this.props.children}
        <input type="text"
               // ref={(inputEl) => {this.inputElement = inputEl}}
               ref={this.inputElementRef}
               onChange={this.props.change}
               value={this.props.name} />
      </Fragment>
    )
  }
};

export default withClass(Person, classes.person);
// export default Radium(Person);
