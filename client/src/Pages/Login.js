import React from 'react';
import { useState } from 'react';
import './Login.css'; 

function LoginForm() {
const [email,setEmail] = useState()
const[password,setPassword] = useState()
const navigatee = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post ('http://localhost/login',{email,password})
  .then (result => {
    console.log(result)
    if(result.data === "succes"){
      navigatee('/home')
    }
  })
  .catch (err => console.log(err))
}

  return (
    <div className='log'>
    <div className="Login-center">
      <h1>Login</h1>
      <form method="post" onSubmit={{handleSubmit}}>
        <div className="txt_field">
          <input type="text" required value={data.username} onChange={(e)=> setData({...data,username:e.target.value})} />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required value={data.password} onChange={(e)=> setData({...data,password:e.target.value})} />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <a href="Register">Signup</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
