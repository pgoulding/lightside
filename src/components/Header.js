import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = (props) => {
    const { favorites } = props;


    return (
        <header>
            <Link to='/'>
                <h1>LightSide</h1>
            </Link>
            <Link to='/Favorites'>
                <button className='faveBtn'>View Favorites: {favorites}</button>
            </Link>
        </header>
    )
}

Header.propTypes = {
    favorites: PropTypes.array.isRequired
}

export default Header;