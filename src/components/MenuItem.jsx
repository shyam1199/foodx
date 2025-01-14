import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../reducers/cartSlice';

const MenuItem = ({ restaurantId, id, name, type, price, rating, reviews, description, image, customizable }) => {
    const dispatch = useDispatch();
    const addItemToCart = () => {
        dispatch(addToCart({ resId: restaurantId, itemId: id }))
    }

    return (
        <div className='flex justify-between p-2 border-b-2 border-gray'>
            <div className='w-9/12'>
                <div className='font-semibold'>{name} {type == "Veg" ? "🥦" : "🍗"}</div>
                <div>₹{price}</div>
                <div>{rating} ({reviews})</div>
                <div className='text-xs'>{description}</div>
            </div>
            <div className='w-3/12 p-6 relative'>
                <img className='w-full rounded-lg' alt='Item Image' src={image} />
                <button className='absolute w-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold shadow-lg bg-white text-green-800 py-1 rounded-md'
                    onClick={addItemToCart}>
                    ADD
                </button>
                {/* {customizable && <div>customizable</div>} */}
            </div>
        </div>
    )
}

export default MenuItem