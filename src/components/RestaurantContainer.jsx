import React from 'react'
import { RestaurantCard } from '.'

const RestaurantContainer = ({ title, resData }) => {
  return (
    <div className='w-10/12 mx-auto my-4'>
      <div className='mx-4 text-2xl font-bold'>{title}</div>
      <div className='flex flex-wrap '>
        {
          resData.map((data) => <RestaurantCard {...data} />)
        }
      </div>
    </div>

  )
}

export default RestaurantContainer