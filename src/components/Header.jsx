import React from 'react'

const Header = () => {
    return (
        <header className='w-full flex justify-between bg-purple-50 h-16 px-48 shadow-lg fixed top-0 left-0 z-10'>
            <div className='flex items-center space-x-2'>
                <img alt='Logo' src='/foodx.png' className='h-10 w-10 hover: cursor-pointer' />
                <div className='text-xl font-bold text-purple hover: cursor-pointer'>FoodX</div>
            </div>
            <div className='flex items-center space-x-10 text-lg'>
                <div className='hover: cursor-pointer' >🔍 Search</div>
                <div className='hover: cursor-pointer'>💬 Contact Us</div>
                <div className='hover: cursor-pointer'>🛒 Cart</div>
                <div className='hover: cursor-pointer'>👨🏻‍💼 Sign In</div>
            </div>
        </header>

    )
}

export default Header