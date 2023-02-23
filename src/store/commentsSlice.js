import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: []
}

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.comments = [...state.comments, action.payload.comment]
        },
        deleteComment: (state, action) => {
            const comments = [...state.comments]
            const newComments = comments.filter(comment => comment.id !== action.payload.commentId)
            state.comments = newComments
        },
        updateComment: (state, action) => {
            const comments = [...state.comments]
            const foundIndex = comments.findIndex(comment => comment.id === action.payload.id)

            if (foundIndex !== -1) {
                comments[foundIndex] = action.payload
            }

            state.comments = comments
        },
    },
})

export const { addComment, deleteComment, updateComment } = commentSlice.actions

export default commentSlice.reducer