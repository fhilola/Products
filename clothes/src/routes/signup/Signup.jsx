import './Signup.css'
import React, { useRef } from 'react'
import { apiInstance } from '../../api'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup(){
const navigate = useNavigate()
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [avatar, setAvatar] = useState('')


function signUp (e){
  e.preventDefault()
  apiInstance.post('/users', {
    name: username,
    email: email,
    password: password,
    avatar: avatar,
  }) 
  .then(response => {
    if(response.status === 201){
      navigate('/login')
    }
  }) 
}

  return(
    <div className='sign-up'>
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
        <input onInput={e => {setUsername(e.target.value)}} value={username} type="text" placeholder='name' />
        <input onInput={e=>{setEmail(e.target.value)}} value={email} type="email" placeholder='email' />
        <input onInput={e=>{setPassword(e.target.value)}} value={password} type="password" placeholder='password' />
        <input onInput={e=>{setAvatar(e.target.value)}} value={avatar} type="url" placeholder='avatar' />
        <button type='submit'>register</button>
      </form>
    </div>
  )
}
   
export default Signup