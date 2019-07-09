import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

import './ButtonContainer.scss'
import human from '../images/006-human.svg';
import planet from '../images/007-universe.svg';
import vehicle from '../images/002-star-wars.svg';


const ButtonContainer = ({ selected }) => {
    let btnData = [
        { People: {
            link: '/people',
            title: 'People',
            img: {human},
        }},
        { Planets: {
            link: '/planets',
            title: 'Planets',
            img: {planet}
        }},
        { Vehicles: {
            link: '/vehicles',
            title: 'Vehicles',
            img: {vehicle}
        }}
    ];

    const buttons = btnData.map(type => {
        return <Button 
                link={type.link}
                title={type.title}
                img={type.img}
                />
    })
    return (
        <nav className={selected ? 'clickedContainer' : 'btnContainer' }>
            { buttons }
        </nav>
    )

}

export default ButtonContainer;