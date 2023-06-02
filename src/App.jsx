import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Careers from './components/Careers'
import Register from './components/Register'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/careers' element={<Careers />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
