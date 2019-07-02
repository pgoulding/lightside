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
      category:'films',
      film:'',
      renderedPage:'',
      pageNumber: null,
      selected: false
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
          changeView={this.changeView}
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

