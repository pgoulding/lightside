import React from 'react';
import Card from './Card'
import { Component } from 'react';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
    }

}

// const Container = () => {
//     return (
//         <section className='cardContainer'>
//             <Card />
//         </section>
//     )
// }

export default Container;