import React, {Component} from 'react'

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
      names: [
        'James',
        'Jessica',
        'Melody',
        'Tyler',
        'Blake',
        'Jennifer',
        'Mark',
        'Maddy'
      ],
      userInput: '',
      filteredNames: []
    };
  }

handleChange(value){
  this.setState({userInput: value})
}

filterNames(userInput){
  var names = this.state.names;

  var filteredNames = names.filter(name => {
    return name.includes(userInput);
  })

this.setState( {filteredNames: filteredNames })

}

  render() {
    return (
      <div className="puzzleBox filterStringPB">
              <h4>  Filter String  </h4>
              <span className="puzzleText"> Names: { JSON.stringify(this.state.names) }    </span>
              <input onChange = { e => this.handleChange(e.target.value)}className="inputLine"></input>
              <button className="confirmationButton" onClick = { () => this.filterNames(this.state.userInput) }>
                Filter
              </button>
              <span className="resultsBox filterStringRB">  { JSON.stringify(this.state.filteredNames) }     </span>
      </div>
    )
  }
}
