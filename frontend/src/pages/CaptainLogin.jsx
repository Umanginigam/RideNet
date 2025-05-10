import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, {
        email,
        password,
      })

      if (response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      alert("Login failed. Check your credentials.")
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 backdrop-blur-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-20 mb-3"
            src="https://i.pinimg.com/736x/ac/5c/4e/ac5c4e500c3f3188d0942e334192b5f8.jpg"
            alt="RideNet"
          />
          <h2 className="text-2xl font-bold text-gray-800">Captain Login</h2>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">What's your email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Enter Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Join a fleet?{' '}
          <Link to="/captain-signup" className="text-blue-600 hover:underline">
            Register as a Captain
          </Link>
        </p>

        <div className="mt-6">
          <Link
            to="/login"
            className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Captainlogin
