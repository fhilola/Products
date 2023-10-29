import './Signup.css'
import React, { useRef } from 'react'
import { apiInstance } from '../../api'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup(){
const [inputText, setInputText] = useState("");
const navigate = useNavigate()

const handleChange = (e) => {
    setInputText(e.target.value);
  };
  // console.log(inputText);
function signUp (e){
  e.preventDefault()
  apiInstance.post('/users', {
    name: "fiamor",
    email: "fiamor@gmail.com",
    password: "fiamor123",
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  }) 
  .then(response => {
    if(response.status === 201){
      navigate('/login')
    }
  }) 
}
  const textRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const urlRef = useRef("");

  return(
    <div className='sign-up'>
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
        <input onInput={handleChange} value={inputText} ref={textRef} type="text" placeholder='name' />
        <input ref={emailRef} type="email" placeholder='email' autoComplete='off'/>
        <input ref={passwordRef} type="password" placeholder='password' autoComplete='off'/>
        <input ref={urlRef} type="url" placeholder='avatar' autoComplete='off'/>
        <button type='submit'>register</button>
      </form>
    </div>
  )
}
   
export default Signup