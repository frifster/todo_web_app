import { axiosBuilder } from "./constants";

export const apiAddNewTodo = async (token, todo) => {
    const instance = axiosBuilder(token);

    const res = await instance.post('/todo/create', { title: todo.title, text: todo.text })

    if (res.data) {
        return res.data
    }
}

export const apiUpdateTodo = async (token, todo) => {
    const instance = axiosBuilder(token);

    const res = await instance.patch('/todo/update', { id: todo.id, title: todo.title, text: todo.text })

    if (res.data) {
        return res.data
    }
}

export const apiDeleteTodo = async (token, todoId) => {
    const instance = axiosBuilder(token);

    const res = await instance.post('/todo/delete', { id: todoId })

    if (res.data) {
        return res.data
    }
}

export const apiGetAllTodos = async (token) => {
    const instance = axiosBuilder(token);
    const res = await instance.post('/todo/view')
    if (res.data) {
        return res.data
    }
}