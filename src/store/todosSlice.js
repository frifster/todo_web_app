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
            const newTodos = todos.filter(todo => todo.id !== action.payload.todoId)
            state.todos = newTodos
        },
        updateTodo: (state, action) => {
            const todos = [...state.todos]
            console.log("action.payload", action.payload)
            const foundIndex = todos.findIndex(todo => todo._id === action.payload.id)

            console.log("foundindex", foundIndex)

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