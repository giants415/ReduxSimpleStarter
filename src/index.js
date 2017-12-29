import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import {KEY} from '../config';

const API_KEY = KEY.MY_KEY;

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (i.e. in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
