import React from 'react';
import logo from '../../world.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h1>Know About All The Countries!</h1>
        </div>
    );
};

export default Header;