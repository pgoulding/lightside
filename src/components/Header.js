import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1>A New Hope</h1>
            <button>View Favorites<span className='faveCounter'>0</span></button>
        </header>
    )
}

export default Header;