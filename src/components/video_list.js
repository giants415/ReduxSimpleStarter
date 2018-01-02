import React from 'react';

//since this is a functional component, props MUST BE PASSED IN
//class components have props available throughout the component
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  )
}

export default VideoList;
