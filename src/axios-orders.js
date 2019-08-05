import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-791ee.firebaseio.com/'
});

export default instance;