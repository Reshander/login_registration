import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup  from './Signup'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Logingin from './Loggingin';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path ='/register' element={<Signup/>}/>
      <Route path='/login' element={<Logingin/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
