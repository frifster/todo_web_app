import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateExistingTodo } from '../../thunks/todosThunks'

function EditTodo() {
    const accessToken = useSelector((state) => state.auth.accessToken)
    const selectedTodo = useSelector((state) => state.todos.selectedTodo)
    const dispatch = useDispatch()
    const [todoTitle, setTodoTitle] = useState(selectedTodo?.title || '')
    const [todoText, setTodoText] = useState(selectedTodo?.text || '')

    const handleOnTodoUpdate = () => {

        const newTodo = {
            title: todoTitle,
            text: todoText,
            id: selectedTodo._id
        }
        dispatch(updateExistingTodo({ token: accessToken, todo: newTodo })).unwrap()

    }

    useEffect(() => {
        if (selectedTodo) {
            setTodoTitle(selectedTodo.title)
            setTodoText(selectedTodo.text)
        }
    }, [selectedTodo])

    return (
        <>
            <input type="checkbox" id="my-edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box p-10 grid gap-5">
                    <h2>Edit This Todo</h2>
                    <input value={todoTitle} onChange={e => setTodoTitle(e.target.value)} type="text" placeholder="Todo title" className="input input-bordered input-info w-full" />
                    <textarea value={todoText} onChange={e => setTodoText(e.target.value)} className="textarea textarea-accent w-full" placeholder='Todo details'></textarea>
                    <div className="modal-action">
                        <button className="btn btn-accent" onClick={handleOnTodoUpdate}>Update</button>
                        <label htmlFor="my-edit-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo