import axios from 'axios';



const wiki = axios.create({

    baseURL: 'https://en.wikipedia.org/w/api.php',
   

});

export default wiki;