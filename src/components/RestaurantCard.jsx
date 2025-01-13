import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ id, name, description, rating, address, image }) => {
  return (
    <Link to={'/restaurant-menu/' + id} className='w-2/12 m-4 h-80 shadow-lg rounded-xl overflow-hidden'>
      <img className="w-full h-36 object-fit" alt='' src={image}></img>
      <div className='m-4'>
        <h1 className='text-l font-semibold'>{name}</h1>
        <div>{rating} ⭐</div>
        <p className='text-sm font-light py-2'>{address}</p>
        <p className='text-sm font-light'>{description}</p>
      </div>
    </Link>

  )
}

export default RestaurantCard