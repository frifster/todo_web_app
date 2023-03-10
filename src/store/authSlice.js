import { createSlice } from '@reduxjs/toolkit'
import { authLogin } from '../thunks/authThunks'

export const PENDING_AUTH = 'PENDING_AUTH'
export const REJECTED_LOGIN = 'REJECTED_LOGIN'
export const FULFILLED_LOGIN = 'FULFILLED_LOGIN'

const initialState = {
    isLoggedIn: false,
    user: null,
    authState: null,
    accessToken: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: state => {
            state.user = null
            state.isLoggedIn = false
            state.accessToken = ''
        },
        setUser: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(authLogin.fulfilled, (state, action) => {
            state.authState = FULFILLED_LOGIN
        })
        builder.addCase(authLogin.pending, (state, action) => {
            state.authState = PENDING_AUTH
        })
        builder.addCase(authLogin.rejected, (state, action) => {
            state.authState = REJECTED_LOGIN
        })
    },
})

export const { login, logout, setUser, setAccessToken } = authSlice.actions

export default authSlice.reducer