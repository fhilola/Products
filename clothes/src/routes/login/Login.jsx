import { useState } from "react"
import { apiInstance } from "../../api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function login(e){
    e.preventDefault()
    apiInstance.post('/auth/login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response);
      if(response.status === 201){
        localStorage.setItem("access_token", response.data.access_token)
        navigate('/private')
      }
    })
  }
  return(
    <div className='sign-up'>
      <form onSubmit={login}>
        <h1>Login</h1>
        <input onInput={e=>{setEmail(e.target.value)}} value={email} type="email" placeholder='email'/>
        <input onInput={e=>{setPassword(e.target.value)}} value={password} type="password" placeholder='password'/>
        <button type='submit'>register</button>
      </form>
    </div>
  )
}

export default Login