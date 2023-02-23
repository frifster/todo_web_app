import React from 'react'
import { useSelector } from 'react-redux'


function Welcome() {
    const user = useSelector((state) => state.auth.user)

    return (
        <div className='col-span-2'>Welcome, User : {user.username} !</div>
    )
}

export default Welcome