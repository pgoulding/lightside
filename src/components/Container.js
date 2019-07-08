import React from 'react';
import Card from './Card'
import './Container.scss'

<<<<<<< HEAD
const Container = ({ data, type, favoriteCard }) => {
    console.log('Container: ', data)
    let swData = data.map(ele => {
        return <Card data={ele} favoriteCard={favoriteCard} type={type}/>
=======

const Container = ({ data, type, favorites, addFavorite, removeFavorite}) => {
    let swData = data.map(ele => {
        return <Card 
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        favorites={favorites}
        data={ele} 
        type={type}
        id={ele.id}
        key={ele.id}
        />
>>>>>>> master
    })

    return (
        <section className='cardContainer'>
            { swData }
        </section>
    )
}

export default Container;