import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const login = () => {
  const [currState, setCurrstate] = useState('Sign Up')
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form  className="login-form">
        <h2>{currState}</h2>
        {currState==='Sign Up'?<input type="text" placeholder='UserName' className="form-input" required/>:null}
        <input type="email" placeholder='E-Mail' className="form-input" required />
        <input type="password" placeholder='password' className="form-input" required/>
        <button type='Submit'>{currState==='Sign Up'?'Create Account':'Login Now'}</button>
        <div className="login-term">
          <input type='checkbox'/>
          <p>Agree terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {
            currState==='Sign Up'
            ?<p className="login-toggle">Already have an account<span onClick={()=>setCurrstate('Login')}> Login here</span></p>
            :<p className="login-toggle">Create an account<span onClick={()=>setCurrstate('Sign Up')}> click here</span></p>
          }
        </div>  
      </form>
    </div>
  )
}

export default login
