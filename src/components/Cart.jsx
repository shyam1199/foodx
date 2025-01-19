import React, { useState } from 'react'
import useCartDetails from '../hooks/userCartDetails'
import { useDispatch, } from 'react-redux'
import { addToCart, clearCart, removeFromCart } from '../reducers/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const [details, setDetails] = useState();
    useCartDetails(setDetails);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!details || !details.resDetails || !details.itemDetails) return;
    const { resDetails, itemDetails } = details;

    let totalPrice = itemDetails.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    const addItemToCart = (id) => {
        dispatch(addToCart({ resId: resDetails.id, itemId: id }))
    }

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const placeOrder = () => {
        dispatch(clearCart())
        alert("Order Placed")
        navigate("/food-delivery")
    }
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className='flex border-b border-t'>
                    <Link to={"/restaurant-menu/" + resDetails.id} className='w-2/12 mt-4 mb-4 p-1'>
                        <img className="w-full" alt='Restaurnt Logo' src={resDetails.image} />
                    </Link>
                    <div className="w-11/12  content-center p-4">
                        <h3 className="text-lg font-semibold">{resDetails.name}</h3>
                        <p className="text-sm text-gray-600">{resDetails.address}</p>
                    </div>
                </div>

                <div className="mb-4">
                    {
                        itemDetails.map((item) => (<div className="w-full flex justify-between mb-2">
                            <span className='w-6/12 text-left'>{item.type == "Veg" ? "🥦" : "🍗"}{item.name}</span>
                            <span className='w-3/12 text-center rounded-lg'>
                                <button className='pr-2' onClick={() => addItemToCart(item.id)}>➕</button>
                                {item.quantity}
                                <button className='pl-2' onClick={() => removeItemFromCart(item.id)}>➖</button>
                            </span>
                            <span className='w-3/12 text-right'>₹{item.quantity * item.price}</span>
                        </div>))
                    }
                </div>
                <div className="border-t pt-2">
                    <div className="flex justify-between items-center mb-2">
                        <span>Item Total</span>
                        <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span>Delivery Fee | 2.7 kms</span>
                        <span>₹50</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span>Platform fee</span>
                        <span>₹10</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span>GST and Restaurant Charges</span>
                        <span>₹40</span>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                        <span>TO PAY</span>
                        <span>₹{totalPrice + 100}</span>
                    </div>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg" onClick={placeOrder}>
                    Review your order and address
                </button>
            </div>
        </div>
    )
}

export default Cart