import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './Header'
import Container from './Container'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import human from '../images/006-human.svg';
import planet from '../images/007-universe.svg';
import vehicle from '../images/002-star-wars.svg';
import DetailsPage from './DetailsPage'
import sortData from './sortData'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      showSplash: true,
      film:'',
      selected:false,
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
        .then(data => sortData(data.results, category))
        .then(swData => this.setState({[category]: swData }))
        .catch(err => this.setState({error: err}))
    })
  }

  changeButtons = () => {
    this.setState({selected:true})
  }

  toggleSplash = () => {
    this.setState({ showSplash: false })
  }

  buttonConatiner = () => {
    return (
      <nav className={this.state.selected ? 'clickedContainer' : 'btnContainer'}>
        <Link to='/People'>
          <button className='selectCategoryBtn' onClick={() => this.changeButtons()}>
            <span className={this.state.selected ? 'active' : 'selectCategoryBtnText'}>People</span>
            <img className='icon' src={human} alt='' />
          </button>
        </Link>
        <Link to='/Planets' >
          <button className='selectCategoryBtn' onClick={() => this.changeButtons()}>
            <span className={this.state.selected ? 'active' : 'selectCategoryBtnText'}>Planets</span>
            <img className='icon' src={planet} alt='' />
          </button>
        </Link>
        <Link to='/Vehicles'>
          <button className='selectCategoryBtn' onClick={() => this.changeButtons()}>
            <span className={this.state.selected ? 'active' : 'selectCategoryBtnText'}>Vehicles</span>
            <img className='icon' src={vehicle} alt='' />
          </button>
        </Link>
      </nav>
    )
  }

  cardsContainer = () => {
    const people = this.state.people;
    const planets = this.state.planets;
    const vehicles = this.state.vehicles;
    return (
      <section>
        {/* <Route path='/' component={<MovieIntro toggleSplash={this.toggleSplash} films={this.state.film} />} /> */}
        <Route exact path='/People' render={() => <Container data={people} type={'People'} />} />
        <Route exact path='/Planets' render={() => <Container data={planets} type={'Planets'} />} />
        <Route exact path='/Vehicles' render={() => <Container data={vehicles} type={'Vehicles'} />} />

        <Route exact path='/People/:name' render={({ match }) => {
          const { name } = match.params
          let specificPerson = people.find(person => name === person.name)
          return specificPerson && <DetailsPage data={specificPerson} type={'People'} key={name} />
        }} />

        <Route exact path='/Planets/:name' render={({ match }) => {
          const { name } = match.params
          let specificPlanet = planets.find(planet => name === planet.name)
          return specificPlanet && <DetailsPage data={specificPlanet} type={'Planets'} key={name} />
        }} />

        <Route exact path='/Vehicles/:name' render={({ match }) => {
          const { name } = match.params
          let specificVehicle = vehicles.find(vehicle => name === vehicle.name)
          return specificVehicle && <DetailsPage data={specificVehicle} type={'Vehicles'} key={name} />
        }} />
      </section>
    )
  }

  render() {

    return (
      <main className='App'>
        {!this.state.showSplash && <Header />}
        {this.state.showSplash && this.state.film && <MovieIntro toggleSplash={this.toggleSplash} films={ this.state.film }/>}
        {!this.state.showSplash && this.buttonConatiner() }
        {!this.state.showSplash && this.cardsContainer()}
      </main>
    )
  }
}

export default App

