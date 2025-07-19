import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    setUserData({
      fullname:{
        firstName: FirstName,
        lastName: LastName,
      },
      email: email,
      password: password,
    });

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    // Here you would typically handle the signup logic, such as sending a request to your backend
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <form onSubmit={(e) => submitHandler(e)}>
            <img className='w-16 mb-2' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
            
            <h3 className='text-lg font-medium mb-2'>What's our Captain's Name</h3>
            <div className='flex gap-4 mb-6'>
              <input
              required
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-gray-200  w-1/2 rounded py-2 px-4  border text-lg placeholder:text-base'
              type="Text"
              placeholder='First Name'
            />
            <input
              required
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-gray-200  w-1/2 rounded py-2 px-4  border text-lg placeholder:text-base'
              type="Text"
              placeholder='Last Name'
            />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-200 mb-6 rounded py-2 px-4  w-full border text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-gray-200 mb-6 rounded py-2 px-4  w-full border text-lg placeholder:text-base'
              type="password"
              placeholder='Password'
            />
            <button className='bg-black px-3 py-3 mb-3 w-full font-semibold text-white rounded'>login</button>
            <p className='text-gray-600 text-center'>Already have an account? <NavLink to='/captain-login' className='text-blue-600'>Login here</NavLink></p>
          </form>
        </div>
        <div>
          <p className='text-gray-600 text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='text-blue-600 underline'>Privacy Policy</span> and <span className='text-blue-600 underline'>Terms of Service</span>.</p>
        </div>
      </div>
  )
}

export default CaptainSignup
