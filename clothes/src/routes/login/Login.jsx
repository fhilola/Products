import { apiInstance } from "../../api"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  function login(e){
    e.preventDefault()
    apiInstance.post('/auth/login', {
      email: "fiamor@gmail.com",
      password: "fiamor123"
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
        <input  type="email" placeholder='email' autoComplete='off'/>
        <input  type="password" placeholder='password' autoComplete='off'/>
        <button type='submit'>register</button>
      </form>
    </div>
  )
}

export default Login