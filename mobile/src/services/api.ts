import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todosbackend.herokuapp.com',
})

export default api;