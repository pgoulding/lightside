import React from 'react';
import './Card.scss'

const Card = () => {
    return (
        <article className='card'>
            <h2>Name:</h2>
            <h3>Homeworld:</h3>
            <h3>Species:</h3>
            <h3>Language:</h3>
            <h3>Population</h3>
        </article>
    )
}

export default Card;