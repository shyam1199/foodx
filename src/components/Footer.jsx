import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-purple-50 md:py-6 mt-10 border-t-2 shadow-2xl">
            <div className='flex flex-col md:flex-row items-center md:justify-center md:space-x-4'>
                <div>
                    <span className='pr-4'>About Us</span>
                    <span>Conatct Us</span>
                </div>
                <div>
                    <span className='pr-4'>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
            <div className="text-sm text-center p-4">
                © 2025 FoodX. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer