import axios from 'axios';



const authService = axios.create({

    baseURL: 'http://localhost:5000',
   

});

export default authService;