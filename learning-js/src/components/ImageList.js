import React from "react";
import "./ImageList.css";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image, i) => {
    return (
     
        <ImageCard key ={image.id} image={image} />
      
    );
  });

  return <div className="ui segment container image-list">{images}</div>;
};

export default ImageList;
