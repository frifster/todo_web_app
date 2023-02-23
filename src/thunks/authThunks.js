import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiLogin, getUserByToken } from '../axios/auth'
import { setUser } from '../store/authSlice'

export const authLogin = createAsyncThunk('auth/login', async ({ username, password }) => {
    const response = await apiLogin(username, password)
    if (response) {
        return response.access_token
    }
})

export const refreshLoginWithToken = createAsyncThunk('auth/login/me', async (token, { dispatch }) => {
    const user = await getUserByToken(token);
    if (user) {
        dispatch(setUser(user))
    }
})