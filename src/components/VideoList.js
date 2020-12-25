import React from 'react';

import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

    const renderVideos = videos.map((video, index) =>{
   
        return (
            <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
        )
    });


    return (
        <div className="ui relaxed divided list">
            {renderVideos}
        </div>
    );
}

export default VideoList;
