import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'
import commentsReducer from './commentsSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        comments: commentsReducer,
        auth: authReducer
    },
})