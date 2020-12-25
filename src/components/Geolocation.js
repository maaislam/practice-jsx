import React, {useState, useEffect} from 'react'

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';



export default function Geolocation() {

  const[lat, setLat] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    let start =true

    if(start){
      window.navigator.geolocation.getCurrentPosition(
      (position) => start? setLat(position.coords.latitude) : null,
      (error) => start? setErrMsg(error.message) : ''
      );
    }
    
    return () => start = false;
    

  },[]);


  const renderContent = () =>{
    if (errMsg && !lat) {
      return <div>Error: {errMsg}</div>;
    } else if (lat && !errMsg) {
      return <SeasonDisplay lat={lat}/>
    } else {
      return <Loader />;
    }
  }


  return (
    <div className="ui segment container" style={{minHeight: '100px'}}>{renderContent()}</div>
  )
}
