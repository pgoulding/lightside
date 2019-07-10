import React from 'react';
import Card from './Card'
import PropTypes from 'prop-types';

import './Container.scss'


const Container = ({ data, type, favorites, addFavorite, removeFavorite }) => {
    let swData = data.map(ele => {
        return <Card 
            key={ele.id}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            favorites={favorites}
            data={ele} 
            type={type}
            id={ele.id}
        />
    })

    return (
        <section className='cardContainer'>
            { swData }
        </section>
    )
}

Container.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string,
    favorites: PropTypes.array.isRequired,
    
}

export default Container;