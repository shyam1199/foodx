import React from 'react'
import { RestaurantCard } from '.'

const RestaurantContainer = ({ title, resData }) => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='mx-4 text-2xl font-bold'>{title}</div>
      <div className='flex flex-col md:flex-row flex-wrap '>
        {
          resData.map((data, k) => <RestaurantCard key={k} {...data} />)
        }
      </div>
    </div>

  )
}

export default RestaurantContainer