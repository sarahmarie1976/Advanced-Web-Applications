import axios from 'axios';

export const axiosAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://localhost:50000/api/',
        header: {
            Authorization: token
        }
    })
}