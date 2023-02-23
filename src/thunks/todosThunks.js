import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiAddNewTodo, apiDeleteTodo, apiGetAllTodos, apiUpdateTodo } from "../axios/todos";
import { addTodo, setTodos, updateTodo, deleteTodo } from "../store/todosSlice";

export const addNewTodo = createAsyncThunk('todo/create', async ({ token, todo }, { dispatch }) => {
    const newTodo = await apiAddNewTodo(token, todo);
    if (newTodo) {
        dispatch(addTodo(newTodo))
    }

    return newTodo
})

export const updateExistingTodo = createAsyncThunk('todo/update', async ({ token, todo }, { dispatch }) => {
    const newTodo = await apiUpdateTodo(token, todo);

    if (newTodo) {
        dispatch(updateTodo(todo))
    }
})


export const deleteTodoById = createAsyncThunk('todo/delete', async ({ token, todoId }, { dispatch }) => {

    console.log("todoId", todoId)
    await apiDeleteTodo(token, todoId);
    dispatch(deleteTodo(todoId))
})

export const getAllTodos = createAsyncThunk('todo/view', async (token, { dispatch }) => {
    const newTodos = await apiGetAllTodos(token);

    dispatch(setTodos(newTodos))

    return newTodos
})