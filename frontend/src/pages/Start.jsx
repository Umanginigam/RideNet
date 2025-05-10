import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center relative' style={{ backgroundImage: `url(https://i.pinimg.com/736x/54/a9/58/54a9581612fc5198f7025b904997af93.jpg)` }}>
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-black/10'></div>
      
      {/* Content */}
      <div className='relative h-full flex flex-col justify-between pt-8'>
        <img className='w-20 ml-8' src="https://i.pinimg.com/736x/ac/5c/4e/ac5c4e500c3f3188d0942e334192b5f8.jpg" alt="RideNet" />
        
        <div className='bg-white/90 backdrop-blur-lg max-w-md mx-auto mb-16 px-8 py-6 rounded-2xl shadow-xl text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Get Started with <span className='text-black'>RideNet</span></h2>
          <p className='text-gray-600 mb-6'>Join millions of riders and drivers using RideNet every day.</p>
          <Link 
            to='/login' 
            className='inline-block w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300 font-medium'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start
