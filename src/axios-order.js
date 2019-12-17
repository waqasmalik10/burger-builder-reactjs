import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newslink-217605.firebaseio.com/'
});

export default instance;