import React from 'react'

const MenuItem = ({ id, name, type, price, rating, reviews, description, image, customizable }) => {
    return (
        <div className='flex justify-between p-2 border-b-2 border-gray'>
            <div className='w-10/12'>
                <div className='font-semibold'>{name} {type == "Veg" ? "🥦" : "🍗"}</div>
                <div>₹{price}</div>
                <div>{rating} ({reviews})</div>
                <div className='text-xs'>{description}</div>
            </div>
            <div className='w-2/12 p-4'>
                <img className='' alt='Item Image' src={image} />
                {/* {customizable && <div>customizable</div>} */}
            </div>
        </div>
    )
}

export default MenuItem