import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full md:w-8/12 mx-auto'>
      <div className='w-10/12 text-center font-bold text-xl md:text-4xl mx-auto md:py-6'>Order food & groceries. Discover best restaurants. FoodX it!</div>
      <div className='w-full flex flex-col md:flex-row justify-around py-8'>
        <Link className='w-8/12 mb-4 md:my-0 mx-auto md:mx-0 md:w-3/12 h-32 md:h-48 border shadow-lg rounded-3xl p-4 text-2xl flex flex-col items-center justify-around bg-white hover:bg-purple-200 duration-300' to="/food-delivery">
          <span className='block pb-2 md:pb-4 font-bold'>Food Delivery</span>
          <span className='block text-sm pb-2 md:pb-4 text-gray-500'> FROM RESTAURANTS</span>
          <span className='w-9/12 block text-xs rounded-2xl bg-purple-700 p-2 text-center'> UPTO 60% OFF</span>
        </Link>
        <div className='w-8/12 mb-4 md:my-0 mx-auto md:mx-0 md:w-3/12 h-32 md:h-48 border shadow-lg rounded-3xl p-4 text-2xl flex flex-col items-center justify-around bg-white hover:bg-purple-200 duration-300' >
          <span className='block pb-2 md:pb-4 font-bold'>Dine Out</span>
          <span className='block text-sm pb-2 md:pb-4 text-gray-500'> EAT OUT & SAVE MORE</span>
          <span className='w-9/12 block text-xs rounded-2xl bg-orange-500 p-2 text-center'> COMMING SOON</span>
        </div>
        <div className='w-8/12 md:my-0 mx-auto md:mx-0 md:w-3/12 h-32 md:h-48 border shadow-lg rounded-3xl p-4 text-2xl flex flex-col items-center justify-around bg-white hover:bg-purple-200 duration-300' >
          <span className='block pb-2 md:pb-4 font-bold'>Quick Delivery</span>
          <span className='block text-sm pb-2 md:pb-4 text-gray-500'> INSTANT GROCERY</span>
          <span className='w-9/12 block text-xs rounded-2xl bg-orange-500 p-2 text-center'> COMMING SOON</span>
        </div>
      </div>
    </div>
  )
}

export default Home