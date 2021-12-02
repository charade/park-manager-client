import axios from 'axios';

const request = axios.create({
    baseURL : 'http://localhost:8080'
})

request.interceptors.request.use(config => {
    const auth = localStorage.getItem('auth');
    if(auth){
        const token  = JSON.parse(auth).token;
        config.headers = Object.assign(config.headers || {}, {Authorization : `Bearer ${token}`})
    };
    return config;
});

request.interceptors.response.use(
    response => Promise.resolve(response), 
    error => Promise.reject(error)
)

export default request;