import React from 'react';
import Card from './Card'
import './Container.scss'

const Container = ({ data }) => {
    let swData = data.map(ele => {
        return <Card data={ele}/>
    })
    console.log(swData)
    return (
        <section className='cardContainer'>
            { swData }
        </section>
    )
}

export default Container;