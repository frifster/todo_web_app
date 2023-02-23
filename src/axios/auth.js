import axios from "axios";
import { BASE_API_URL, axiosBuilder } from "./constants"

export const apiLogin = async (username, password) => {
    const res = await axios.post(`${BASE_API_URL}/auth/login`, { username, password })

    if (res.data) {
        return res.data
    }

    return new Error('Invalid Login Details')
}

export const getUserByToken = async (token) => {
    const instance = axiosBuilder(token);

    const res = await instance.post('/auth/me')

    if (res.data) {
        return res.data
    }
}