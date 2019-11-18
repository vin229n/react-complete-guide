import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state ={
    persons: [
      {id: 'sdasd',name: 'Vinayak' , age: 21},
      {id: 'sdasdsdsd',name: 'Max' , age: 22},
      {id: 'sdasdsdac',name: 'Start' , age: 51}
    ],
    otherState: 'other vallue',
    showPersons: false
  }

  deletePersonHandler = (personsIndex ) => {
    let persons = [...this.state.persons];
    persons.splice(personsIndex,1);
    this.setState({persons:persons})
    console.log(
      "cslsadksldkldk",personsIndex
    );
    
    
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name =   event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  toglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };

  render() {
  
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}  
                  changed = {this.nameChangedHandler}
                />
    }

    return (  
        <div className={classes.App}>
          <Cockpit 
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.toglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
