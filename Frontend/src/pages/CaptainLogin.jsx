import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const CaptainLogin = () => {
   
  const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {captainData, setCaptainData} = useState({});
  
    function submitHandler (e){
      e.preventDefault();
      setCaptainData({
          email: email,
          password: password
      })
      setEmail('');
      setPassword('');
      // Here you would typically handle the login logic, such as sending a request to your backend
    }  

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <img className='w-16 mb-2' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-gray-200 mb-7 rounded py-2 px-4  w-full border text-lg placeholder:text-base'
        type="email"
         placeholder='email@example.com'
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-gray-200 mb-7 rounded py-2 px-4  w-full border text-lg placeholder:text-base'
        type="password"
        placeholder='Password'
        />
        <button className='bg-black px-3 py-3 mb-3 w-full font-semibold text-white rounded'>login</button>
        <p className='text-gray-600 text-center'>Join a fleet? <NavLink to='/captain-signup' className='text-blue-600'>Register as Captain</NavLink></p>
      </form>
      </div>
      <div>
         <NavLink to='/login' className='bg-green-500 border-green-800 flex items-center justify-center mb-6 px-3 py-3 w-full font-semibold text-white rounded'>Sign in as User</NavLink>
      </div>
    </div>
  )
}

export default CaptainLogin
