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
import AddAddress from './components/AddAddress'
import AdminHome from './components/AdminHome'
import AdminLogin from './components/AdminLogin'
import AddProduct from './components/AddProduct'
import AddStore from './components/AddStore'
import Test from './components/Test'
import PrivateRoute from './components/PrivateRoute'
function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/test' element={<Test />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/orders' element={< PrivateRoute Component={Orders} />} />
          <Route path='/new-order' element={< PrivateRoute Component={CreateOrder} />} />
          <Route path='/checkout' element={< PrivateRoute Component={Checkout} />} />
          <Route path='/add-address' element={< PrivateRoute Component={AddAddress} />} />
          <Route path='/admin-home' element={<AdminHome />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/add-store' element={<AddStore />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
