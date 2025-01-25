import React from 'react'

const RestaurantShimmerMenu = () => {
  return (
    <div className='w-10/12 md:w-5/12 mx-auto animate-pulse'>
      {
        new Array(6).fill(0).map((data, index) => (
          <div className='h-32 flex justify-between p-2 border-b-4 rounded-b-lg border-gray bg-white'>
            <div className='w-9/12'>
              <div className='h-4 mx-4 my-2 bg-gray-300'></div>
              <div className='h-4 mx-4 my-2 bg-gray-300'></div>
              <div className='h-4 mx-4 my-2 bg-gray-300'></div>
              <div className='h-4 mx-4 my-2 bg-gray-300'></div>
            </div>
            <div className='w-3/12 md:p-6 relative'>
              <div className='w-full h-full rounded-lg bg-gray-300'></div>
            </div>
          </div>))
      }
    </div>
  )
}

export default RestaurantShimmerMenu