import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import KEY from './config';

const API_KEY = KEY;

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  //fn to set state of the new video list post search entry
  videoSearch(term) {
    YTSearch({key: API_KEY, term: 'term'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // in ES6, if key and property are the same variable name then it can be condensed
      // from something like ({ videos: videos}) to what is seen above
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (i.e. in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
