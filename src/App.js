import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './components/Header'
import People from './People'
import Planets from './Planets'
import Vehicles from './Vehicles'
import Category from './components/Category'
import swapi from './swapi'
import './App.css';


export class App extends Component {
  constructor () {
    super()
    this.state = {
      selected: false
    }
  }

  changeView = () => {
    this.setState({ selected: !this.state.selected })
  }


  render() {
    const categories = ['People', 'Planets', 'Vehicles'];
    const categoryButtons = categories.map(category => {
      return (
        <Category
          key={category}
          title={category}
          />
      )
    })
   //Add title attribute to Header for movie once API is figured out

    return (
      <div className='App'>
        <Header />
        <section className='btnContainer'>
          {categoryButtons}
        </section>
      </div>
    )
  }
  
}

export default App

