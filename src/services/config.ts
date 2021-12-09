import axios from 'axios';

export const request = axios.create({
    baseURL : 'http://localhost:8080'
});

request.interceptors.request.use(config => {
    const auth = localStorage.getItem('auth');
    if(auth){
        config.headers = Object.assign(config.headers || {}, {Authorization : `Bearer ${auth}`})
    };
    return config;
});

request.interceptors.response.use(
    response => Promise.resolve(response), 
    error => Promise.reject(error)
);

export default request;