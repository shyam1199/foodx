import React, { useEffect, useState } from 'react'
import RestaurantContainer from './RestaurantContainer';
import { getRestaurantList } from '../backend/services/restaurant';

const FoodDelivery = () => {
  const [resData, setResData] = useState();

  useEffect(() => {
    getRestaurantList().then(data => { setResData(data) });
  }, [])

  if (!resData?.length) return <div>ShimmerUI</div>

  return (
    <RestaurantContainer title={"Restaurants with online food delivery"} resData={resData} />
  )
}

export default FoodDelivery