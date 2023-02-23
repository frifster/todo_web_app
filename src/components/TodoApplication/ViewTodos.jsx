import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../../thunks/todosThunks';
import { setSelectedTodo } from '../../store/todosSlice';
import EditTodo from './EditTodo';

function ViewTodos() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.accessToken)
    const selectedTodo = useSelector((state) => state.todos.selectedTodo)

    const todos = useSelector((state) => state.todos.todos)
    useEffect(() => {
        dispatch(getAllTodos(accessToken)).unwrap()
    }, [])

    const handleTodoClick = (todo) => {
        dispatch(setSelectedTodo(todo))
    }

    return (
        <div className='todo-container p-5'>
            <h1>Your current todos:</h1>
            {
                todos.map((todo, index) => {
                    return (
                        <div key={todo._id} className='text-left p-2' onClick={() => handleTodoClick(todo)} htmlFor="my-edit-modal">
                            <label htmlFor="my-edit-modal" className='cursor-pointer'><h2 className='font-bold'>{index + 1}. {todo.title}</h2>
                                <p>{todo.text}</p>
                            </label>
                            <div className="divider"></div>
                        </div>
                    )
                })
            }
            {selectedTodo && <EditTodo />}
        </div>
    )
}

export default ViewTodos