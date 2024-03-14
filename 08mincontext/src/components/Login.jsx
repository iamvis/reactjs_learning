import React, { useContext, useState } from 'react'
import UserContext from '../context/UseContext'

function Login() {
    const[username, setusername]= useState('')
    const [password, setpassword]= useState('')
    const {setuser}=useContext(UserContext)

    const handleSubmit=(event)=>{
     event.preventDefault()
     setuser({username, password})

    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(event )=> setusername(event.target.value)}
      placeholder='username' />
           {" "}
      <input type="text" 
        value={password}
        onChange={(event )=> setpassword(event.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  )
}

export default Login
