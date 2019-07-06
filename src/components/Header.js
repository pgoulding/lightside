import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header>
            <h1>LightSide</h1>
            <button className='faveBtn'>View Favorites: {props.favorites}</button>
        </header>
    )
}

export default Header;