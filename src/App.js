import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import People from './People'
import Planets from './Planets'
import Vehicles from './Vehicles'
import swapi from './swapi'
import './App.css';


export class App extends Component {
  constructor () {
    super()
    this.state = {
      category:'films',
      film:'',
      renderedPage:'',
      pageNumber: null
    }
  }

  componentDidMount(){
    const url = `https://swapi.co/api/${this.state.category}/?page=${this.state.pageNumber}`

  }

  renderPage = () => {
    if(this.state.renderedPage === 'intro') {
      return <MovieIntro films={this.state.films} />
    } else if (this.state.renderedPage === 'home') {
      return 
    } else {
      return <h3>NOTHING HERE</h3>
    }
  }

  render() {
    return (
      <main className="App"> 
        { this.renderPage() }
      </main>
    )
  }

}

export default App

