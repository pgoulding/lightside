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
      selected: false,
      category:'people',
      next:'',
      previous:'',
      data:'',
      pageNumber: ''
    }
  }

  componentDidMount(){
    const url = `https://swapi.co/api/${this.state.category}/?page=${this.state.pageNumber}`
    fetch(url)
      .then(response => response.json())
      .then(swData => this.setState({ data: swData.results, next: swData.next, previous:swData.previous }))
      .catch(err => console.error(err))
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

