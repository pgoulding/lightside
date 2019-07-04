import React from 'react';
import faveInactive from '../images/002-prize.svg';
import './Card.scss'

const Card = ({ data }) => {
    return (
        <article className='card'>
            <h2>Name: {data.name}</h2>
            <h3>{data.birth_year && `Birth Year: ${data.birth_year}` || data.terrain && `Terrain: ${data.terrain}` || data.model && `Model: ${data.model}`}</h3>
            <h3>{data.gender && `Gender: ${data.gender}` || data.diameter && `Diameter: ${data.diameter}` || data.class && `Class: ${data.class}`}</h3>
            <h3>{data.height && `Height: ${data.height}` || data.population && `Population: ${data.population}` || data.passengers && `Passengers: ${data.passengers}`}</h3>
            <h3>{data.eye_color && `Population: ${data.eye_color}` || null}</h3>
        </article>
    )
}

export default Card;