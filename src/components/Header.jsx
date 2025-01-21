import React from 'react';
import { Link } from 'react-router-dom';
import useCartItemCount from '../hooks/useCartItemCount';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useCartItemCount();
    const userInfo = useSelector((state) => state.user);

    return (
        <header className='w-full flex justify-between bg-purple-50 h-16 shadow-lg fixed top-0 left-0 z-10'>
            <div className='w-1/12'></div>
            <Link to="/" className='flex items-center space-x-2 w-4/12'>
                <img alt='Logo' src='/foodx.png' className='h-10 w-10 cursor-pointer' />
                <div className='text-xl font-bold text-purple-800 hover:text-purple-600 hidden sm:block'>FoodX</div>
            </Link>

            <div className='flex items-center justify-between space-x-10 text-lg w-6/12'>
                <div className='cursor-pointer hover:text-purple-600 hidden sm:block'>🔍 Search</div>
                <Link to="contact-us" className='hover:text-purple-600 hidden sm:block'>💬 Contact Us</Link>
                <div className='cursor-pointer hidden sm:block'>
                    <Link to="/cart">
                        🛒 Cart{cartItemsCount ? `(${cartItemsCount})` : ""}
                    </Link>
                </div>

                {userInfo && userInfo.name ? (
                    <div className='relative group hidden sm:block'>
                        <div className="text-gray-800 hover:text-purple-600">Hi, {userInfo.name}</div>
                        <div className="absolute shadow-lg mt-2 w-36 min-h-12 px-4 bg-white text-sm rounded-md opacity-0 group-hover:opacity-100">
                            <button
                                className="my-2 text-gray-700 hover:text-purple-600"
                                onClick={() => dispatch(logout())}>
                                🏃 Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className='cursor-pointer hover:text-purple-600 hidden sm:block'>
                        👨🏻‍💼 Sign In
                    </Link>
                )}
            </div>

            <div className="sm:hidden flex items-center">
                <button className="text-xl text-purple-800">
                    ☰
                </button>
            </div>

            <div className='w-1/12'></div>
        </header>
    );
};


export default Header;