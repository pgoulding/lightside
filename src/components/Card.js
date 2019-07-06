import React from 'react';
import { Link } from 'react-router-dom';

// import faveInactive from '../images/002-prize.svg';
import './Card.scss'
import favInactive from '../images/001-lightsaber.svg';
import favActive from '../images/002-game.svg';

const Card = ({ data, isFavorited, toggleFavorite, type, id }) => {
//     return (
//         <article className='card' onClick={() => toggleFavorite()} >
//             <h2>{data.name}</h2>
//             <h3>{data.birth_year && `Birth Year: ${data.birth_year}` || data.terrain && `Terrain: ${data.terrain}` || data.model && `Model: ${data.model}`}</h3>
//             <h3>{data.gender && `Gender: ${data.gender}` || data.diameter && `Diameter: ${data.diameter}` || data.class && `Class: ${data.class}`}</h3>
//             <h3>{data.height && `Height: ${data.height}` || data.population && `Population: ${data.population}` || data.passengers && `Passengers: ${data.passengers}`}</h3>
//             <h3>{data.eye_color && `Population: ${data.eye_color}` || null}</h3>
// const Card = ({ data, type }) => {
// console.log(data)

    return (
        <article className='card'>
            <img onClick={() => toggleFavorite(id)}src={isFavorited ? favActive : favInactive} className='favIcon' alt='' />
            <h2>{data.name}</h2>
            <h3>{
                (data.birth_year && `Birth Year: ${data.birth_year}` )
                || (data.terrain && `Terrain: ${data.terrain}`) 
                || (data.model && `Model: ${data.model}`)
                }</h3>
            <h3>{
                (data.gender && `Gender: ${data.gender}` )
                || (data.diameter && `Diameter: ${data.diameter}`)
                || (data.vehicle_class && `Class: ${data.vehicle_class}`)
                }</h3>
            <h3>{ 
                (data.height && `Height: ${data.height}`) 
                || (data.population && `Population: ${data.population}`)
                || (data.passengers && `Passengers: ${data.passengers}`)
                || ''}</h3>
            <h3>{ 
                (data.eye_color && `Eye Color: ${data.eye_color}` )
                || (data.climate && `Climate: ${data.climate}` )
                || ''}</h3>

            <Link key={data.name} to={`/${type}/${data.name}`}>More Details</Link>
        </article>
    )
}

export default Card;