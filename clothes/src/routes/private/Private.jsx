import React from 'react'
import Home from '../home/Home'
import { Navigate } from 'react-router-dom'
import { validateToken } from '../helpers/validToken'

const Private = () => {
    const token = localStorage.getItem("access_token");
    return token && validateToken(token) ? <Home/> : <Navigate to='/login'/>
}

export default Private