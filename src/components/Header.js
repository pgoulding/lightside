import React from 'react';
import { Link, Route } from 'react-router-dom';
import Container from './Container';
import './Header.scss';

const Header = (props) => {
    const { favorites } = props;


    return (
        <header>
            <h1>LightSide</h1>
            <Link to='/favorites'>
                <button className='faveBtn'>View Favorites: {favorites}</button>
            </Link>
        </header>
    )
}

export default Header;