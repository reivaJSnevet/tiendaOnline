import axios from 'axios';

const baseURL = 'https://tiendaonline-api-production.up.railway.app/api/';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default api;
