
import axios from 'axios';



export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        key: 'AIzaSyAa2TjKlnKFDRT2EpfxDEsb_JB7GO-JldY',
        part: "snippet",
        maxResults: 10
    }
    
});