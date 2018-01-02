import React from 'react';

const VideoListItem = ({video}) => {
  // const video = props.video; this line is replaced, in es6,
  //by the curly brace var the is passed in

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
