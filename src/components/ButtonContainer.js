import React from 'react';
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
            animateButtons: {animateButtons},
            key: 1
        },
        {   link: '/planets',
            title: 'Planets',
            img: planet,
            animateButtons: {animateButtons},
            key: 2
        },
        {   link: '/vehicles',
            title: 'Vehicles',
            img: vehicle,
            animateButtons: {animateButtons},
            key: 3
        }
    ];

    const buttons = btnData.map(type => {
        return <Button 
                animateButtons={animateButtons}
                link={type.link}
                title={type.title}
                img={type.img}
                key={type.key}
                />
    })
    return (
        <nav className={selected ? 'clickedContainer' : 'btnContainer' }>
            { buttons }
        </nav>
    )

}

ButtonContainer.propTypes = {
    animateButtons: PropTypes.func.isRequired
}

export default ButtonContainer;