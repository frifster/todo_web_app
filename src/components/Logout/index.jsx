import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { TODO_ACCESS_TOKEN } from '../../constants'

function Logout() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem(TODO_ACCESS_TOKEN)
        dispatch(logout())
    }
    return (
        <div>
            <label htmlFor="logout-modal" className="btn btn-error">Log Out</label>
            <input type="checkbox" id="logout-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box p-10 grid gap-5">
                    <h2>Are you sure you want to log out?</h2>
                    <div className="modal-action">
                        <button className="btn btn-error" onClick={handleLogout}>Log Out</button>
                        <label htmlFor="logout-modal" className="btn" >Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout