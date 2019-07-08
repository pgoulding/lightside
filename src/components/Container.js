import React from 'react';
import Card from './Card'
import './Container.scss'


const Container = ({ data, type, favorites, addFavorite, removeFavorite}) => {
    console.log('Container: ', data)
    let swData = data.map(ele => {
        return <Card 
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

export default Container;