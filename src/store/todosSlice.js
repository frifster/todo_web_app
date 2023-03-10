import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    selectedTodo: null
}

export const todoSclice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        deleteTodo: (state, action) => {
            const todos = [...state.todos]
            const newTodos = todos.filter(todo => todo._id !== action.payload)
            state.todos = newTodos
            state.selectedTodo = null
        },
        updateTodo: (state, action) => {
            const todos = [...state.todos]
            const foundIndex = todos.findIndex(todo => todo._id === action.payload.id)

            if (foundIndex !== -1) {
                todos[foundIndex] = action.payload
            }

            state.todos = todos
            state.selectedTodo = null
        },
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        setSelectedTodo: (state, action) => {
            state.selectedTodo = action.payload
        }
    },
})

export const { addTodo, deleteTodo, updateTodo, setTodos, setSelectedTodo } = todoSclice.actions

export default todoSclice.reducer