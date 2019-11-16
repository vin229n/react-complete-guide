import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    person: [
      {name: 'Vinayak' , age: 21},
      {name: 'Max' , age: 22},
      {name: 'Start' , age: 51}
    ],
    otherState: 'other vallue'
  }

  swithNameHandler = ( newName ) =>{
    
    this.setState({
      person: [
        {name: 'Vinayakakjkdjks' , age: 21},
        {name: 'Max' , age: 22},
        {name: 'Start' , age: 51}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        {name: event.target.value , age: 21},
        {name: 'Manu' , age: 22},
        {name: 'Start' , age: 51}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi welocme to react</h1>
        <button onClick={this.swithNameHandler}>click</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}
          click={this.swithNameHandler}
          changed={this.nameChangedHandler}>ksajdksadj</Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>
      </div>
    );
  }
}

export default App;
