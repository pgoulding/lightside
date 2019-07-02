import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
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
   //will add variables here to 

    return (
      <div className='App'>
        <Category title='People' changeView={this.changeView}/>
        <Category title='Planets' changeView={this.changeView}/>
        <Category title='Vehicles' changeView={this.changeView}/>
      </div>
    )
  }
  
}

export default App

