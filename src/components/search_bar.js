import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  //controlled form input - onchange causes component to rerender
  //and update value seen in search bar
  render() {
          // ( ) around event are dropped in this case bc only 1 argument is passed in
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
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
