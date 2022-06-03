import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            {/* topheader  */}
            <div className='short-nav'>
                <div className='top-item'>
                    <ul className='list-item '>
                        <li className='item'>My Account</li>
                        <li>Wishlist</li>
                        <li>My Card</li>
                        <li>Chackout</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;