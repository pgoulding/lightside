import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = (props) => {
    const { favorites, restoreHomePage, animateButtons } = props;


    return (
        <header>
            <Link to='/'>
                <h1 onClick={() => {restoreHomePage()}}>LightSide</h1>
            </Link>
            <Link to='/Favorites'>
                <button className='faveBtn' onClick={() => {animateButtons()}}>View Favorites: {favorites}</button>
            </Link>
        </header>
    )
}

Header.propTypes = {
    favorites: PropTypes.array.isRequired,
    restoreHomePage: PropTypes.func.isRequired,
    animateButtons: PropTypes.func.isRequired
}

export default Header;