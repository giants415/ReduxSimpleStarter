import React from 'react';

import VideoListItem from './video_list_item';

//since this is a functional component, props MUST BE PASSED IN
//class components have props available throughout the component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
