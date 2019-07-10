import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

import './ButtonContainer.scss'
import human from '../images/006-human.svg';
import planet from '../images/007-universe.svg';
import vehicle from '../images/002-star-wars.svg';


const ButtonContainer = ({ selected, animateButtons }) => {
    let btnData = [
        {   link: '/people',
            title: 'People',
            img: human,
            animateButtons: {animateButtons}
        },
        {   link: '/planets',
            title: 'Planets',
            img: planet,
            animateButtons: {animateButtons}
        },
        {   link: '/vehicles',
            title: 'Vehicles',
            img: vehicle,
            animateButtons: {animateButtons}
        }
    ];

    const buttons = btnData.map(type => {
        return <Button 
                animateButtons={animateButtons}
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