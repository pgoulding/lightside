import React from 'react';
import './Card.scss'

const Card = (data) => {
    data.map(item => {
        return (
            <article>
                <h2>{item.name}</h2>
                <h3>{item.birth_year}</h3>
                <h3>{item.gender}</h3>
                <h3>{item.height}</h3>
                <h3>{item.eye_color}</h3>
            </article>
        )
    })
}

export default Card;