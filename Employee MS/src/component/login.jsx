import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import axios from 'axios'


const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (event => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/adminlogin', values)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  })

  return (
    <div className='body'>
      <div className='wrapper'>
        <form action="" onSubmit={handleSubmit}>
      
          <h1>Login</h1>
     
          <div className='inputBox'>
            <input type="email" name="email" id="" placeholder='Enter your Email' onChange={(e)=> setValues({...values, email : e.target.value})}/>
          </div>

          <div className='inputBox'>
            <input type="password" name="password" id="" placeholder='Enter your Password' onChange={(e)=> setValues({...values, password : e.target.value})}/>
          </div>

          <div className='remember-forgot'>
              <label htmlFor=""><input type="checkbox" />Remember Your Account ? </label>
          </div>

          <button className='loginBtn'>Login</button>

          <div className='regis'>
            <p>Don't have an account? <a href="">Register</a></p> 
          </div>
        </form>

      </div>
    </div>

    
  )
}

export default Login
