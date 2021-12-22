import axios from 'axios'
let Http = axios.create({
    baseURL: ` `,
    credentials: 'include',
    headers: {
        'content-type': 'application/json',
    },  
});


export default Http