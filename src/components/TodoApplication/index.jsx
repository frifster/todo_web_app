import React from 'react'
import AddTodo from './AddTodo'
import ViewTodos from './ViewTodos'
import Logout from '../Logout'
import Welcome from '../Welcome'

function TodoApplication() {
    return (
        <div className='grid grid-cols-12'>
            <Welcome />
            <ViewTodos />
            <AddTodo />
            <Logout />
        </div>
    )
}

export default TodoApplication