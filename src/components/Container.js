import React from 'react';
import Card from './Card'
import { Component } from 'react';

// class Container extends Component {
//     constructor() {
//         super();
//         this.state = {
//             clicked: false
//         }
//     }

// }

const Container = (data) => {
   const peopleCards = data.map(item => {
        return (          
            <Card 
                name={item.name}
                birthYear={item.birth_year}
                gender={item.gender}
                height={item.height}
                eyeColor={item.eye_color}
            />
        )
    })
    return (
        <section className='cardContainer'>
            {peopleCards}
        </section>
    )
}

export default Container;