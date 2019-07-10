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

    let error = (
        <div className='noFavesMessage'>
          <h2>To display, no favorites you have.</h2>
        </div>
      )

    return (
        <section className='cardContainer'>
            {favorites.length ? swData : error}
        </section>
    )
}

Container.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string,
    favorites: PropTypes.array.isRequired,
    
}

export default Container;