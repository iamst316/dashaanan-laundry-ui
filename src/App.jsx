import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Careers from './components/Careers'
import Register from './components/Register'
import Orders from './components/Orders'
import CreateOrder from './components/CreateOrder'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/new-order' element={<CreateOrder/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
