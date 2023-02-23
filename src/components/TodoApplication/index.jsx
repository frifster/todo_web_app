import React, { useState } from 'react'
import AddTodo from './AddTodo'
import ViewTodos from './ViewTodos'

function TodoApplication() {
    return (
        <div>
            <h1 className='mb-5'>Todos</h1>
            <AddTodo />
            <ViewTodos />
        </div>
    )
}

export default TodoApplication