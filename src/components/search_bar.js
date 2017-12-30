import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
            // ( ) around event are dropped in this case bc only 1 argument is passed in
    return <input onChange={event => console.log(event.target.value)} />;
  }

  //event handler. Commented out and refactored to
  //take advantage of es6
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
