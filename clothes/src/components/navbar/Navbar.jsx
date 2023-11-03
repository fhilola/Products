import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Container } from '../../utily/Index';

const Navbar = () => {
  const {pathname} = useLocation()
  return !pathname.includes('login') && !pathname.includes('signup') && !pathname.includes('home') && !pathname.includes('/single-product') && !pathname.includes('private') && !pathname.includes('likedProducts') &&
  (
    <Container>
      <div className='nav__wrapper'>
        <h1>Products</h1>
        <ul>
            <li>
                <Link to='signup'>Signup</Link>
            </li>
            <li>
                <Link to='login'>Login</Link>
            </li>
        </ul>
    </div>
    </Container>
  )
}
export default Navbar