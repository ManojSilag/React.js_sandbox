import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID df8928f8b14b58ded1eb2dc06ab63cb713a79527327b43599fb7089db9fef05f'
    }
});