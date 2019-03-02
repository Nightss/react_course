import React, { PureComponent } from 'react'
import Person from './People/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends PureComponent {
  // static getDerivedStateFromProps (props,state) {
  //   console.log('get persons.js derived state from props')
  //   return state
  // };

  // componentWillRecieveProps(props) {
  //  Deperacted
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('persons.js should component update ')
  //   console.log(nextProps.persons, this.props.persons)
  //   console.log(nextProps.persons !== this.props.persons)
  //   if (nextProps.persons !== this.props.persons) {
  //     return true
  //   } else {
  //     return false
  //   }
  // };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons.js get snapshot before update')
    return { message: 'snapshot'}
  };

  // componentWillMount(){
  //   console.log('Person.js component will mount')
  // }; old lifecycle hook

  // componentWillUpdate(){
  //  old lifecycle hook
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Persons.js component Did Update ')
    console.log(snapshot)
  };

  componentDidMount() {
  };

  componentWillUnmount() {
    console.log('Person.js will unmount')
  };



  render () {
    console.log('Persons rendering...', this.props)
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            change={(event) => this.props.changed(event, person.id) }/>
        </ErrorBoundary>)
      })
    }
}

export default Persons;
