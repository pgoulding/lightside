import React from 'react';
import faveInactive from '../images/002-prize.svg';
import './Card.scss'

const Card = ({ data }) => {
    return (
        <article className='card'>
            <h2>Name: {data.name}</h2>
            <h3>{data.birth_year && `Birth Year: ${data.birth_year}` || data.terrain && `Terrain: ${data.terrain}`}</h3>
            <h3>Species:</h3>
            <h3>Language:</h3>
            <h3>Population</h3>
        </article>
    )
}

export default Card;