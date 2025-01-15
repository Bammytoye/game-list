import axios from "axios";

const Api_Key = 'eeb5cc6c65e84f4ab282a382f09c5a72';

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api',
});

const getGenreList = axiosCreate.get('/genres?key=' + Api_Key)





export default {getGenreList}