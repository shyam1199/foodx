import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/food-delivery">Food Delivery</Link>
    </div>

  )
}

export default Home