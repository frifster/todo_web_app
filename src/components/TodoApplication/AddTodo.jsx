import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo } from '../../thunks/todosThunks'

function AddTodo() {
    const accessToken = useSelector((state) => state.auth.accessToken)
    const dispatch = useDispatch()
    const [todoTitle, setTodoTitle] = useState('')
    const [todoText, setTodoText] = useState('')
    const [openModal, setOpenModal] = useState(false)


    const handleOnTodoSave = () => {
        const newTodo = {
            title: todoTitle,
            text: todoText
        }
        dispatch(addNewTodo({ token: accessToken, todo: newTodo })).unwrap()
        setOpenModal(false)
    }
    return (
        <>
            <label htmlFor="my-modal" className="btn" onClick={e => setOpenModal(true)}>Add new todo</label>
            <input type="checkbox" id="my-modal" className="modal-toggle" checked={openModal} />
            <div className="modal">
                <div className="modal-box p-10 grid gap-5">
                    <h2>Add new Todo</h2>
                    <input value={todoTitle} onChange={e => setTodoTitle(e.target.value)} type="text" placeholder="Todo title" className="input input-bordered input-info w-full" />
                    <textarea value={todoText} onChange={e => setTodoText(e.target.value)} className="textarea textarea-accent w-full" placeholder='Todo details'></textarea>
                    <div className="modal-action">
                        <button className="btn btn-accent" onClick={handleOnTodoSave}>Save</button>
                        <label htmlFor="my-modal" className="btn" onClick={e => setOpenModal(false)}>Close</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo