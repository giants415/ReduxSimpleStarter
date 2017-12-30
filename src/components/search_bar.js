import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
          // ( ) around event are dropped in this case bc only 1 argument is passed in
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }

  //event handler. Commented out and refactored to
  //take advantage of es6
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
