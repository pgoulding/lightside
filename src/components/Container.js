import React from 'react';
import Card from './Card'
import './Container.scss'

const Container = ({ data, type, favoriteCard }) => {
    console.log('Container: ', data)
    let swData = data.map(ele => {
        return <Card data={ele} favoriteCard={favoriteCard} type={type}/>
    })

    return (
        <section className='cardContainer'>
            { swData }
        </section>
    )
}

export default Container;