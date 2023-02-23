import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../../thunks/todosThunks';

function ViewTodos() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.accessToken)
    useEffect(() => {
        dispatch(getAllTodos(accessToken)).unwrap()
    }, [])

    return (
        <div>ViewTodos</div>
    )
}

export default ViewTodos