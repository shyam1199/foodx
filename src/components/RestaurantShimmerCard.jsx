import React from 'react'

const RestaurantShimmerCard = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap'>
            {
                new Array(10).fill(0).map((data, index) => (
                    <div key={index} className='w-10/12 md:w-2/12 m-4 h-80 shadow-lg rounded-xl bg-white animate-pulse'>
                        <div className="w-full h-36 bg-gray-300" />
                        <div className='my-6 mx-2'>
                            <div className='h-6 my-2 bg-gray-300'></div>
                            <div className='h-6 my-2 bg-gray-300'></div>
                            <div className='h-6 my-2 bg-gray-300'></div>
                            <div className='h-6 my-2 bg-gray-300'></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RestaurantShimmerCard