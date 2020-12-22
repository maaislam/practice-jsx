import React from "react";
import Loader from "./Loader";
const VideoDetail = ({ selectedVideo }) => {
 

  const renderVid = () => {
    if (!selectedVideo) {
      return <Loader />;
    } else { 
        const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
      return (
        <React.Fragment>
          <div className="ui embed">
            <iframe src={videoSrc} title={selectedVideo.id.videoId} frameborder="0"></iframe>
          </div>
          <div className="ui segment container">
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <div style={{ minHeight: "100px" }}>
      {renderVid()}
    </div>
  );
};

export default VideoDetail;
