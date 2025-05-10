import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainSignup = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [loading, setLoading] = useState(false)

  const { setCaptain } = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType
      }
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (err) {
      alert('Signup failed. Please try again.')
    }

    setLoading(false)
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img className="w-14 h-14 rounded-full border" src="https://i.pinimg.com/736x/ac/5c/4e/ac5c4e500c3f3188d0942e334192b5f8.jpg" alt="Logo" />
          <h2 className="text-2xl font-bold text-gray-800">Captain Signup</h2>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-lg font-medium text-gray-700">Vehicle Info</div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Vehicle Color"
              className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Vehicle Plate"
              className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Vehicle Capacity"
              className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              required
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">🚗 Car</option>
              <option value="auto">🛺 Auto</option>
              <option value="moto">🏍️ Moto</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition duration-200 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Creating Account...' : 'Create Captain Account'}
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/captain-login" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>

        {/* Footer */}
        <p className="text-[10px] text-gray-500 mt-6 text-center">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
