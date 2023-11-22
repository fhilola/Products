import './App.css'
import Signup from './routes/signup/Signup'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/login/Login'
import Navbar from './components/navbar/Navbar'
import SingleProduct from './routes/singleProduct/SingleProduct'
import Private from './routes/private/Private'
import LikedProducts from './components/liked/LikedProducts'
import Cart from './components/cart/Cart'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/private' element={<Private/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/single-product/:id' element={<SingleProduct/>}/>
      <Route path='/likedProducts' element={<LikedProducts/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}
export default App