import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  console.log({ isLoggedIn })

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className='bg-red-200'>{`Logged in?:: ${isLoggedIn}`}</div>
    </div>
  )
}

export default App
