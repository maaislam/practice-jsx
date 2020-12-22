import axios from 'axios';



const googleTranslate = axios.create({

    baseURL: 'https://translation.googleapis.com/language/translate/v2',
   

});

export default googleTranslate;