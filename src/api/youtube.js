
import axios from 'axios';



export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        key: 'AIzaSyAO9XJwfVgZnva4zr7lrrvL1OphWabGtjw',
        part: "snippet",
        maxResults: 10
    }
    
});