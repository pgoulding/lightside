import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1>LightSide</h1>
            <button className='faveBtn'>View Favorites: <span className='faveCounter'> 0</span></button>
        </header>
    )
}

export default Header;