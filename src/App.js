import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './People/Person';
import Radium, { StyleRoot} from 'radium';
class App extends Component {
  state = {
    persons: [
      {id: "a", name: 'Jordan'},
      {id: "b", name: 'Daneil'},
      {id: "c", name: 'Zhair'},
      {id: "d", name: 'Andrei'}
    ],
    showPersons: false
  };

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


  render() {
    const style = {
      backgroundColor: 'lightblue',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      border: '3px solid red',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'green',
        color: 'black',
      }
    };


    let persons = null

    if (this.state.showPersons) {
      persons = (
                <div className="person-container">
                  {this.state.persons.map((person, index) => {
                    return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      key={person.id}
                      change={(event) => this.changeNameHandler(event, person.id) }/>
                    })}

                </div>)
      style.backgroundColor = 'yellow'
      style[':hover'] = {
        backgroundColor: 'green',
        color: 'white'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push("red")
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold")
    }

    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <h2 className={classes.join(' ')}>Become a finisher</h2>
            <button style={style} onClick={this.togglePersons.bind(this)}>Switch it up</button>
            {persons}
          </header>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
