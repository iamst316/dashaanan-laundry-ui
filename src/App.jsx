import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './redux/store'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Careers from './components/Careers'
import Register from './components/Register'
import Orders from './components/Orders'
import CreateOrder from './components/CreateOrder'
import Checkout from './components/Checkout'
function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/new-order' element={<CreateOrder/>} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
