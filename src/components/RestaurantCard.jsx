import React from 'react'

const RestaurantCard = ({ id, name, description, rating, address, image }) => {
  return (
    <div className='w-2/12 m-4 h-80 shadow-lg rounded-xl overflow-hidden'>
      <img className="w-full h-36 object-fit" alt='' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/a5e2b6e1-abbd-492f-9472-44af9dda6103_9864.jpg'></img>
      <div className='m-4'>
        <h1 className='text-l font-semibold'>{name}</h1>
        <div>{rating} ⭐</div>
        <p className='text-sm font-light py-2'>{address}</p>
        <p className='text-sm font-light'>{description}</p>
      </div>
    </div>
  )
}

export default RestaurantCard