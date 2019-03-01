import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6abb5b2242a44f9c8d66941f7aa1dbf32478032524c4308e57be90c0425b86a3'
    }
})