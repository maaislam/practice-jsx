import React from "react";
import "./ImageList.css";
import ImageCard from './ImageCard';



const ImageList = (props) => {

  const imageCount = props.images.length;
  

  const images = props.images.map((image, i) => {
    return (
     
        <ImageCard key ={image.id} image={image} />
      
    );
  });

  if(imageCount){

    return <div className="ui segment container image-list">{images}</div>;
  }else{
    return null
  }
};

export default ImageList;
