import React, {useState, useEffect} from "react";

import youtube from "../../api/youtube";

import SearchBar from "../SearchBar";
import VideoDetail from "../VideoDetail";
import VideoList from "../VideoList";

const YoutubeSearch = () => {


    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [term, setTerm] = useState('building');
    useEffect(() => {
        const onVideoSearchSubmit = async() => {
            const response = await youtube.get("/search", {
                params: {
                  q: term,
                },
              });
           
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);

        }
        if (term){
            onVideoSearchSubmit();
        }
       
    }, [term])


  return (
    <div>
      <div>
        <SearchBar
          onSearchSubmit={setTerm}
          searchBarTitle="Video Search"
        />
      </div>
      <div className="ui grid container" style={{ marginTop: "10px" }}>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <div className="ui segment container">
              <VideoList
                videos={videos}
                onVideoSelect={setSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSearch;
