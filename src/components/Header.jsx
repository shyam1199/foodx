import React from 'react'
import { Link } from 'react-router-dom'
import useCartItemCount from '../hooks/useCartItemCount'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const cartItemsCount = useCartItemCount()
    const userInfo = useSelector((state) => state.user)

    return (
        <header className='w-full flex justify-between bg-purple-50 h-16 px-48 shadow-lg fixed top-0 left-0 z-10'>
            <Link to="/" className='flex items-center space-x-2'>
                <img alt='Logo' src='/foodx.png' className='h-10 w-10 hover: cursor-pointer' />
                <div className='text-xl font-bold text-purple hover: cursor-pointer'>FoodX</div>
            </Link>
            <div className='flex items-center space-x-10 text-lg'>
                <div className='hover: cursor-pointer' >🔍 Search</div>
                <Link to="contact-us" className='hover: cursor-pointer'>💬 Contact Us</Link>
                <div className='cursor-pointer hover'>
                    <Link to="/cart"> 🛒 Cart{cartItemsCount ? `(${cartItemsCount})` : ""}</Link>
                </div>
                {
                    Object.keys(userInfo).length ?
                        <div className='group'>
                            <div >Hi, {userInfo.name}</div>
                            <div className="absolute shadow-lg mt-2 w-36 min-h-12 px-4 bg-white text-s rounded-md opacity-0 group-hover:opacity-100">
                                <button className="my-2 text-gray-700" onClick={() => dispatch(logout())}>
                                    🏃 Logout
                                </button>
                            </div>
                        </div> :
                        <Link to="/login" className='hover: cursor-pointer'>👨🏻‍💼 Sign In</Link>
                }
            </div>
        </header>

    )
}

export default Header