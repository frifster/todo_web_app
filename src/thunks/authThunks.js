import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiLogin, apiRegister, getUserByToken } from '../axios/auth'
import { setAccessToken, setUser } from '../store/authSlice'

export const authLogin = createAsyncThunk('auth/login', async ({ username, password }, { dispatch }) => {
    const response = await apiLogin(username, password)
    if (response) {
        dispatch(refreshLoginWithToken(response.access_token))
        return response.access_token
    }
})

export const authRegister = createAsyncThunk('auth/register', async ({ username, password }, { dispatch }) => {
    const response = await apiRegister(username, password)
    if (response) {
        dispatch(refreshLoginWithToken(response.access_token))
        return response.access_token
    }
})

export const refreshLoginWithToken = createAsyncThunk('auth/login/me', async (token, { dispatch }) => {
    const user = await getUserByToken(token);
    if (user) {
        dispatch(setAccessToken(token))
        dispatch(setUser(user))
    }
})