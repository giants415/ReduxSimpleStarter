import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'search_bar';

import {KEY} from '../config.js';

const API_KEY = KEY.MY_KEY;

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (i.e. in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
