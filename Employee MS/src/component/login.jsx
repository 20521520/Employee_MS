import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'

const Login = () => {
  return (
    <div className='body'>
      <div className='wrapper'>
        <form action="">
      
          <h1>Login</h1>
     
          <div className='inputBox'>
            <input type="email" name="" id="" placeholder='Enter your Email'/>
          </div>

          <div className='inputBox'>
            <input type="password" name="" id="" placeholder='Enter your Password'/>
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
