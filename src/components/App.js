import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './Header'
import Container from './Container'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import human from '../images/006-human.svg';
import planet from '../images/007-universe.svg';
import vehicle from '../images/002-star-wars.svg';


export class App extends Component {
  constructor () {
    super()
    this.state = {
      selected: false,
      next:'',
      film:'',
      previous:'',
      pageNumber: ''
    }
  }

  componentDidMount(){
    const starWarsMovies = `https://swapi.co/api/films/`
    fetch(starWarsMovies)
    .then(response => response.json())
    .then(films => this.setState({ film: films.results.find(movie => movie.episode_id === Math.floor(Math.random() * (6 - 1 + 1)) + 1) }))
    .catch(err => console.error(err))
    this.updatePage()
  }

  updatePage = () => {
    let categories = ['people', 'planets', 'vehicles']
    categories.map(category => {
      const url = `https://swapi.co/api/${category}/?page=${this.state.pageNumber}`
      fetch(url)
        .then(response => response.json())
        .then(swData => this.setState({[category]: swData.results, next: swData.next, previous: swData.previous }))
        .catch(err => console.error(err))
    })
  }

  buttonConatiner = () => {
    return (
      <section className='btnContainer'>
        <Link to='/People'>
          <button className='selectCategoryBtn'>People<img className='icon' src={human} alt='' /></button>
        </Link>
        <Link to='/Planets'>
          <button className='selectCategoryBtn'>Planets<img className='icon' src={planet} alt='' /></button>
        </Link>
        <Link to='/Vehicles'>
          <button className='selectCategoryBtn'>Vehicles<img className='icon' src={vehicle} alt='' /></button>
        </Link>
        <Route path='/People' render={() => <Container data={this.state.people} />} />
        <Route path='/Planets' render={() => <Container data={this.state.planets} />} />
        <Route path='/Vehicles' render={() => <Container data={this.state.vehicles} />} />
      </section>
    )
  }

  render() {

    return (
      <div className='App'>
        <Header />
        {!this.state.selected && <MovieIntro films={ this.state.film }/>}
        {!this.state.selected && <button onClick={() => this.setState({ selected: true })}>Take me in!</button>}
        {this.state.selected && this.buttonConatiner()}
      </div>
    )
  }
}

export default App
