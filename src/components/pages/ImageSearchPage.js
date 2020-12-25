import React, {useState, useEffect} from 'react';
import unsplash from "../../api/unsplash";

import SearchBar from '../SearchBar';
import ImageList from '../ImageList';

const ImageSearchPage = () => {


    const [images, setImages] =useState([]);
    const [term, setTerm] = useState('building');


    useEffect(() => {
        const onImageSearchSubmit = async() =>{
            const response = await unsplash.get("/search/photos", {
                params: { 
                  query: term 
                }
              });
           
            setImages(response.data.results)
        }

        if(term){
            onImageSearchSubmit(); 
        }
        
    }, [term])


    return (
        <div>
            <SearchBar
            onSearchSubmit={setTerm}
            searchBarTitle="Image Search"
          />
          <ImageList images={images} />
        </div>
    );
}

export default ImageSearchPage;
