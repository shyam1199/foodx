import React, { useEffect, useState } from 'react'
import resList from "../data/restaurantList.json"
import RestaurantContainer from './RestaurantContainer';

const FoodDelivery = () => {
  const [resData, setResData] = useState();

  useEffect(() => {
    setTimeout(() => { setResData(resList) }, 1000)
  }, [])

  if (!resData?.length) return <div>ShimmerUI</div>

  return (
    <RestaurantContainer title={"Restaurants with online food delivery"} resData={resData} />
  )
}

export default FoodDelivery