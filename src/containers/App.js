import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth_context';


// import Radium, { StyleRoot} from 'radium';
class App extends Component {
  constructor(props) {
    super(props)
    console.log("App.js Constructor")
    // this.state = {}
  };

  state = {
    persons: [
      {id: "a", name: 'Jordan'},
      {id: "b", name: 'Daneil'},
      {id: "c", name: 'Zhair'},
      {id: "d", name: 'Andrei'}
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("app js get drivend state from props", props)
    return state
  }

  // componentWillMount(){
  // Deperacted lifecycle hook
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App js should component update ')
    return true
  }

  componentDidUpdate(){
    console.log('App js component did update ')
  }

  componentDidMount() {
    console.log('App.js component did mount')
  }


  switchNameHandler = (newName) => {
    // console.log("testing")
    // BAD BOY dont do this this.state.persons[0].name = "Jordanss"
    this.setState({
      persons: [
        {name: newName},
        {name: 'Daneil'},
        {name: 'Zhair'},
        {name: 'Andrei'}
      ]
    })
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  };

  togglePersons = () => {
    const viewPersons = this.state.showPersons
    this.setState({showPersons: !viewPersons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice() same as spread operator
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  loginHnadler = () => {
    const login = this.state.authenticated
    this.setState({authenticated: !login})
  }

  render() {
    console.log('Render app.js')
    // const style = {
    //   backgroundColor: 'lightblue',
    //   color: 'white',
    //   font: 'inherit',
    //   padding: '8px',
    //   border: '3px solid red',
    //   cursor: 'pointer'
    //   // Radium styling ':hover': {
    //   //   backgroundColor: 'green',
    //   //   color: 'black',
    //   // }
    // };

    let persons = null

    if (this.state.showPersons) {
      persons = (
                <div className={classes['person-container']}>
                  <Persons persons={this.state.persons}
                           clicked={this.deletePersonHandler}
                           changed={this.changeNameHandler}/>
                </div>)
      // style.backgroundColor = 'yellow'
      //  radium styling style[':hover'] = {
      //   backgroundColor: 'green',
      //   color: 'white'
      // }
    }



    return (
      // radium <StyleRoot>
        <Fragment>
          <header className={classes['App-header']}>
            <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
            <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHnadler}}>
              { this.state.showCockpit ? (
                  <Cockpit showPersons={this.state.showPersons}
                           personsLength={this.state.persons.length}
                           togglePersons={this.togglePersons}/>
                  ) : null }
              {persons}
            </AuthContext.Provider>
          </header>
        </Fragment>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default withClass(App, classes.App);
