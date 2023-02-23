import axios from 'axios';

export const BASE_API_URL = "http://localhost:3000"
export const axiosBuilder = token => {
    return axios.create({
        baseURL: BASE_API_URL,
        headers: { 'Authorization': 'Bearer ' + token }
    });
}
