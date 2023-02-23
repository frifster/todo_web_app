import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authLogin } from '../../thunks/authThunks'
import { TODO_ACCESS_TOKEN } from '../../constants'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleOnLoginClick = async () => {
        if (!username || !password) {
            return;
        }
        const accessToken = await dispatch(authLogin({ username, password })).unwrap()

        if (accessToken) {
            localStorage.setItem(TODO_ACCESS_TOKEN, accessToken)
        }
    }

    const handleOnRegisterClick = () => {
        if (!username || !password) {
            return;
        }
    }


    return (
        <div className='grid w-3/5 p-5 place-items-center gap-5'>
            <div className="form-control">
                <label className="input-group w-full">
                    <span>Username</span>
                    <input type="text" className="input input-bordered w-full" value={username} onChange={handleUsername} />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group w-full">
                    <span>Password </span>
                    <input type="password" className="input input-bordered w-full" value={password} onChange={handlePassword} />
                </label>
            </div>

            <div className="flex gap-5">
                <button className="btn btn-accent" onClick={handleOnLoginClick}>Login</button>
                <button className="btn btn-primary" onClick={handleOnRegisterClick}>Register</button>
            </div>
        </div>
    )
}

export default Login