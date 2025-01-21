import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-purple-50 py-6 mt-10 border-t-2 shadow-2xl">
            <div className='flex justify-center space-x-4'>
                <div>About Us</div>
                <div>Conatct Us</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
            </div>
            <div className="text-sm text-center p-4">
                © 2025 FoodX. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer