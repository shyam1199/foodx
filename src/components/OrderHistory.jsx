import React, { useEffect, useState } from 'react'
import { fetchUserOrders } from '../backend/services/order'
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchUserOrders().then((d) => { setData(d) })
    }, [])
    return (
        <div className='w-11/12 md:max-w-md mx-auto'>
            <h2 className="text-2xl font-bold mb-4 text-center">Order History</h2>
            {
                data.map(({ resDetails, itemDetails, placedAt }, index) => {
                    placedAt = new Date(parseInt(placedAt, 10))
                    placedAt = `${String(placedAt.getDate()).padStart(2, "0")}-${String(placedAt.getMonth() + 1).padStart(2, "0")}-${String(placedAt.getFullYear()).slice(-4)} ${String(placedAt.getHours()).padStart(2, "0")}:${String(placedAt.getMinutes()).padStart(2, "0")}`

                    return (<div key={index} className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <div className='flex border-b border-t'>
                                <Link to={"/restaurant-menu/" + resDetails.id} className='w-2/12 mt-4 mb-4 p-1'>
                                    <img className="w-full" alt='Restaurnt Logo' src={resDetails.image} />
                                </Link>
                                <div className="w-11/12  content-center p-4">
                                    <h3 className="text-lg font-semibold">{resDetails.name}</h3>
                                    <p className="text-sm text-gray-600">{resDetails.address}</p>
                                    <p className="text-sm font-semibold">{placedAt}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                {
                                    itemDetails.map((item, index) => (<div key={index} className="w-full flex justify-between mb-2">
                                        <span className='w-7/12 text-left'>{item.type == "Veg" ? "🥦" : "🍗"}{item.name}</span>
                                        <span className='w-3/12 text-center rounded-lg'>   {item.quantity} </span>
                                        <span className='w-2/12 text-right'>₹{item.quantity * item.price}</span>
                                    </div>))
                                }
                            </div>
                            <div className="border-t pt-2">
                                <div className="flex justify-between items-center mb-2">
                                    <span>Item Total</span>
                                    <span>₹{itemDetails.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</span>
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
                                    <span>TOTAL</span>
                                    <span>₹{itemDetails.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) + 100}</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default OrderHistory