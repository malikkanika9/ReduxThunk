import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
 import { Dashboard} from './components/Dashboard'
import {  Register } from './components/Register'
import { Login } from './components/Login'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App