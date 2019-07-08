import React from 'react';
import { Link } from 'react-router-dom';

import './Card.scss'
import favInactive from '../images/001-lightsaber.svg';
import favActive from '../images/002-game.svg';


class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            isFavorited: false
        }
    }
    
    toggleFavorite = () => {
        const { addFavorite, removeFavorite, id } = this.props;
        const { isFavorited } = this.state;

        this.setState({ isFavorited: !isFavorited })
        if(!isFavorited) {
            addFavorite(id)
        } else {
            removeFavorite(id)
        }
    }

    componentDidMount()  {
        const { favorites, id } = this.props;

        if(favorites.includes(id)) {
            this.setState({ isFavorited: true })
        }
    }

    render() {
        const { data, type } = this.props;

        return (
            <article className='card'>
                <img
                    onClick={this.toggleFavorite} 
                    src={this.state.isFavorited ? favActive : favInactive} 
                    className='favIcon' alt='' />
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
}


export default Card;