import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const userData = { email, password }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-700 p-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 mb-4"
            src="https://i.pinimg.com/736x/ac/5c/4e/ac5c4e500c3f3188d0942e334192b5f8.jpg"
            alt="User"
          />
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-500 text-sm">Login to continue your journey</p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          New here?{' '}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Create an account
          </Link>
        </p>

        <Link
          to="/captain-login"
          className="block text-center mt-4 text-sm font-medium text-white bg-emerald-600 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
