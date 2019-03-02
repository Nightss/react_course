import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth_context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef();
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('Cockpit.js use effect')
    // HTTP reuqest...
    // const timer = setTimeout(() => {
    //   alert('saved data to the cloud')
    // }, 1000)
    toggleButtonRef.current.click()
    return () => {
      // clearTimeout(timer)
      console.log('cockpits js use effect cleanup work')
    }
  }, [])
// second param takes a array which tells when useffect should run
// an empty array means it only runs on mount
  useEffect(() => {
    console.log('cockpit js use effect 2nd')
    return () => {
      console.log('cockpits js 2nd use effect cleanup work')
    }
  })

  let btnClass= '';
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.red
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h2 className={assignedClasses.join(' ')}>Become a finisher</h2>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.togglePersons.bind(this)}>Switch it up</button>
      <button onClick={authContext.login}>log in</button>
    </div>
  )
}

export default React.memo(Cockpit)
