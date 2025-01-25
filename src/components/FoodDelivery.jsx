import React, { useEffect, useState } from 'react'
import { RestaurantContainer, RestaurantShimmerCard } from '.';
import { getRestaurantList } from '../backend/services/restaurant';

const FoodDelivery = () => {
  const [resData, setResData] = useState();

  useEffect(() => {
    getRestaurantList().then(data => { setResData(data) });
  }, [])

  if (!resData?.length) return (<RestaurantShimmerCard />);

  return (
    <RestaurantContainer title={"Restaurants with online food delivery"} resData={resData} />
  )
}

export default FoodDelivery