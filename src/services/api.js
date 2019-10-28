import axios from 'axios'
const api = axios.create({
    baseURL: 'https://horarios-cc-api.herokuapp.com/',
});
export default api;