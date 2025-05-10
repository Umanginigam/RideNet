import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
  <div className='h-screen flex items-center justify-center bg-gray-100'>
  <div className='bg-white shadow-lg rounded-xl p-10 w-full max-w-md'>
    <img className='w-16 mx-auto mb-6' src="https://i.pinimg.com/736x/ac/5c/4e/ac5c4e500c3f3188d0942e334192b5f8.jpg" alt="Logo" />

    <form onSubmit={submitHandler}>
      <h2 className='text-2xl font-semibold text-center mb-6'>Create your Account</h2>

      <label className='block mb-1 font-medium'>Full Name</label>
      <div className='flex gap-3 mb-4'>
        <input
          required
          placeholder='First name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className='w-1/2 px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          required
          placeholder='Last name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='w-1/2 px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <label className='block mb-1 font-medium'>Email</label>
      <input
        required
        type="email"
        placeholder='email@example.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full px-4 py-2 mb-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />

      <label className='block mb-1 font-medium'>Password</label>
      <input
        required
        type="password"
        placeholder='Create a password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full px-4 py-2 mb-6 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />

      <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold'>
        Create Account
      </button>
    </form>

    <p className='text-center text-sm mt-4'>Already have an account? <Link to='/login' className='text-blue-600 hover:underline'>Login here</Link></p>

    <p className='text-xs text-center text-gray-500 mt-6'>
      This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.
    </p>
  </div>
</div>
)
}

export default UserSignup