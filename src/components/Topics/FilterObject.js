import React, { Component } from 'react'

export default class FilterObject extends Component {

constructor() {
   super();

   this.state = {
     employees : [
       {
         name: "Jimmy Joe",
         title: 'Hacker',
         age: 12,
       },
       {
         name: "Jeremy Schrader",
         age : 26,
         hairColor: 'brown'
       },
       {
         name: "Daanish Nasir",
         title: "developer"
       }
     ],

     userInput: '',
     filteredEmployees: [],
   }
 }

handleChange(val) {
  this.setState({userInput: val})
}

filterEmployees(key){
  var employees = this.state.employees;
  var filteredEmployees = [];

  employees.map( employee => {
    if(employee.hasOwnProperty(key)){
      filteredEmployees.push(employee);
    }
  })

  this.setState({filteredEmployees:filteredEmployees});
}


    render() {
      return (
        <div className="puzzleBox filterObjectPB">
             <h4> Filter Object </h4>
             <span className="puzzleText"> Original: { JSON.stringify(this.state.employees) } </span>

             <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>

             <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>

             <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees) } </span>
        </div>
      )
    }
  }
