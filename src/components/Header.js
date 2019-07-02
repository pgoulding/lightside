import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <header>
            {props.movieTitle}
            <button>View Favorites<span className='faveCounter'>{props.favorites}</span></button>
        </header>
    )
}

export default Header;