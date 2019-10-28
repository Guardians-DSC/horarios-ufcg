import axios from 'axios'
const api = axios.create({
    baseURL: 'https://horarios-cc-api.herokuapp.com/horarios',
});
export default api;