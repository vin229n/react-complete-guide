import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
      return p.id == id;
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
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor : 'pointer'
    };

    let Persons = null;

    if(this.state.showPersons) {
      Persons = (
        <div >
          {this.state.persons.map( (person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name= {person.name}
              age= {person.age}
              changed={(event) =>{ this.nameChangedHandler(event,person.id)}}
              key={person.id}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi welocme to react</h1>
        <button style={style} onClick={this.toglePersonsHandler}>click</button>
        {Persons}
      </div>
    );
    
  }
}

export default App;
