import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
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
            const newTodos = todos.filter(todo => todo.id !== action.payload.todoId)
            state.todos = newTodos
        },
        updateTodo: (state, action) => {
            const todos = [...state.todos]
            const foundIndex = todos.findIndex(todo => todo.id === action.payload.id)

            if (foundIndex !== -1) {
                todos[foundIndex] = action.payload
            }

            state.todos = todos
        },
        setTodos: (state, action) => {
            state.todos = action.payload
        }
    },
})

export const { addTodo, deleteTodo, updateTodo, setTodos } = todoSclice.actions

export default todoSclice.reducer