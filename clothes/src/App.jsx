import './App.css'
import Signup from './routes/signup/Signup'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/login/Login'
import Navbar from './components/navbar/Navbar'
import Home from './routes/home/Home'
import SingleProduct from './routes/singleProduct/SingleProduct'
import Private from './routes/private/Private'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/private' element={<Private/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/single-product/:id' element={<SingleProduct/>}/>
    </Routes>
    </>
  )
}
export default App