import React, { Component } from 'react'


export default class EvenAndOdd extends Component {

constructor() {
   super();

   this.state = {
    evenArray: [],
    oddArray : [],
    userInput: ''
   }
 }

handleChange(value) {
  this.setState( { userInput: value })
}

assignEvenAndOdds(userInput){
  var arr = userInput.split('');
  var evens = [];
  var odds = [];

  arr.forEach(num => {
    num = parseInt(num)
     if(num % 2 === 0){
       evens.push(num);
     }
     else{
       odds.push(num);
     }
   })

  this.setState ( {
    evenArray : evens,
    oddArray : odds
  })
}



    render() {
      return (
        <div className="puzzleBox evenAndOddPB">
             <h4> Evens and Odds </h4>
             <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>

             <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>

             <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
             <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
        </div>
      )
    }
  }
