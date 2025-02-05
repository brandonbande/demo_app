import React,{useEffect} from 'react'
import { BrowserRouter , Router , Routes , Route } from 'react-router-dom'
import Notes from './pages/Notes'
import LoginRegister from './pages/LoginRegister'

const App = () => {
  return (
    <div className='w-screen h-screen bg-slate-300 flex items-center justify-center p-5'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Notes />} />
                <Route path='/login' element={<LoginRegister />} />
            </Routes>
        </BrowserRouter>
    </div>
  ) 
}

export default App