import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import TodoApplication from './components/TodoApplication'
import Login from './components/Login'
import { useEffect } from 'react'
import { TODO_ACCESS_TOKEN } from './constants'
import { refreshLoginWithToken } from './thunks/authThunks'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem(TODO_ACCESS_TOKEN)
    if (accessToken) {
      dispatch(refreshLoginWithToken(accessToken))
    }
  }, [])

  return (
    <div className="App">
      <div className="flex flex-col w-full">
        <div className="grid h-12 card rounded-box place-items-center">
          <h1 className='font-bold text-3xl'>Todo Application</h1>
        </div>
        <div className="divider"></div>
        <div className="grid h-auto cardrounded-box place-items-center p-10">
          {
            isLoggedIn ? <TodoApplication /> : <Login />
          }

        </div>
      </div>
    </div>
  )
}

export default App
