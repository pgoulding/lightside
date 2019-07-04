import React from 'react';
import faveInactive from '../images/002-prize.svg';
import './Card.scss'

// const Card = (data) => {
//     data.map(item => {
//         return (
//             <article>
//                 <h2>{item.name}</h2>
//                 <h3>{item.birth_year}</h3>
//                 <h3>{item.gender}</h3>
//                 <h3>{item.height}</h3>
//                 <h3>{item.eye_color}</h3>
//             </article>
//         )
//     })
// }


const Card = () => {
        return (
            <article>
                <div><img src={faveInactive} className='fave-icon' alt=''/></div>
                <h2>Name : </h2>
                <h3>Birth Year: </h3>
                <h3>Gender : </h3>
                <h3>Height: </h3>
                <h3>Eye Color: </h3>
            </article>
        )

}

export default Card;