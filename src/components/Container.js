import React from 'react';
import Card from './Card'
import './Container.scss'


// class Container extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isFavorited: false,
//         }
//     }

   

//     render() {
//         let swData = data.map(ele => {
//             return <Card toggleFavorite={this.toggleFavorite} data={ele}/>
//         })
//         return (
//             <section className='cardContainer'>
//                 {swData}
//             </section>
//         )
//     }
// }


const Container = ({ data, type, toggleFavorite }) => {
    console.log('Container: ', data)
    let swData = data.map(ele => {
        return <Card 
        toggleFavorite={toggleFavorite} 
        isFavorited
        data={ele} 
        type={type}
        id={Date.now()}
        />
    })

    return (
        <section className='cardContainer'>
            { swData }
        </section>
    )
}

export default Container;