import React from 'react';
import { Link, Route } from 'react-router-dom';
import Container from './Container';
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

export default Header;