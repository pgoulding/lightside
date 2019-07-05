import React from 'react';
import Card from './Card'
import './Container.scss'





class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            isFavorited: false,
        }
    }

    toggleFavorite = () => {
        this.setState({ isFavorited: !this.state.isFavorited})
    }

    render() {
        let swData = data.map(ele => {
            return <Card toggleFavorite={this.toggleFavorite} data={ele}/>
        })
        return (
            <section className='cardContainer'>
                {swData}
            </section>
        )
    }
}

// const Container = ({ data }) => {
//     let swData = data.map(ele => {
//         return <Card data={ele}/>
//     })
//     console.log(swData)
//     return (
//         <section className='cardContainer'>
//             { swData }
//         </section>
//     )
// }

export default Container;