import axios from 'axios';


const quotes = axios.create({
    baseURL: 'http://quotes.stormconsultancy.co.uk',
   
});

export default quotes;