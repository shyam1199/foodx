import React from 'react';
import { Link } from 'react-router-dom';
import useCartItemCount from '../hooks/useCartItemCount';
import { useSelector } from 'react-redux';
import { userLogout } from '../backend/services/auth';

const Header = () => {
    const cartItemsCount = useCartItemCount();
    const userInfo = useSelector((state) => state.user);

    return (
        <header className='w-full flex justify-between bg-purple-50 h-16 shadow-lg fixed top-0 left-0 z-10'>
            <div className='w-1/12'></div>
            <Link to="/" className='flex items-center space-x-2 w-4/12'>
                <img alt='Logo' src='/foodx.png' className='h-10 w-10 cursor-pointer' />
                <div className='text-xl font-bold text-purple-800 hover:text-purple-600 hidden md:block'>FoodX</div>
            </Link>

            <div className='flex items-center justify-between space-x-10 text-lg w-6/12'>
                <Link to="contact-us" className='hover:text-purple-600'>
                    <span>💬</span>
                    <span className='pl-2 md:h-full md:w-full hidden md:inline'> Contact Us</span>
                </Link>
                <div className='cursor-pointer'>
                    <Link to="/cart">
                        <span>🛒</span>
                        <span className='px-2 md:h-full md:w-full hidden md:inline'>Cart</span>
                        <span> {cartItemsCount ? `(${cartItemsCount})` : ""}</span>
                    </Link>
                </div>
                <div className='cursor-pointer'>
                    <Link to="/order-history">
                        <span>📜</span>
                        <span className='px-2 md:h-full md:w-full hidden md:inline'>Order History</span>
                    </Link>
                </div>

                {userInfo && userInfo.name ? (
                    <div className='relative group'>
                        <div className="text-gray-800 hover:text-purple-600">
                            <span>👨🏻‍💼</span>
                            <span className='pl-2 md:h-full md:w-full hidden md:inline'>{userInfo.name}</span>
                        </div>
                        <div className="absolute shadow-lg mt-2 w-36 min-h-12 px-4 bg-white text-sm rounded-md opacity-0 group-hover:opacity-100">
                            <div className='my-2'>Hi, {userInfo.name}</div>
                            <button
                                className="my-2 text-gray-700 hover:text-purple-600"
                                onClick={userLogout}>
                                🏃 Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className='cursor-pointer hover:text-purple-600'>
                        <span>👨🏻‍💼</span>
                        <span className='pl-2 md:h-full md:w-full hidden md:inline'>Sign In</span>
                    </Link>
                )}
            </div>
            <div className='w-1/12'></div>
        </header>
    );
};


export default Header;