import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8a21712fe101680b8bd1a53bd7b098cc458b5d8af521403add2d2bb8bdd31b7f'
    }
})