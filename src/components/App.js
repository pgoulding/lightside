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
    .then(films => this.setState({ film: films.results.find(movie => movie.episode_id === Math.floor(Math.random() * (6 - 2 + 1)) + 1) }))
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

  favoriteCard = (name, category) => {
    let card = this.state[category].find(obj => obj.name === name)
    card.isFavorited = !card.isFavorited
    this.setState({[category]: [...this.state[category]]})
  }

  changeButtons = () => {
    this.setState({ selected:true })
  }

  toggleSplash = () => {
    this.setState({ showSplash: false })
  }

  buttonConatiner = () => {
    return (
      <nav className={this.state.selected ? 'clickedContainer' : 'btnContainer'}>
        <Link to='/people'>
          <button className='selectCategoryBtn' onClick={() => this.changeButtons()}>
            <span className={this.state.selected ? 'active' : 'selectCategoryBtnText'}>People</span>
            <img className='icon' src={human} alt='' />
          </button>
        </Link>
        <Link to='/planets' >
          <button className='selectCategoryBtn' onClick={() => this.changeButtons()}>
            <span className={this.state.selected ? 'active' : 'selectCategoryBtnText'}>Planets</span>
            <img className='icon' src={planet} alt='' />
          </button>
        </Link>
        <Link to='/vehicles'>
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
        <Route exact path='/people' render={() => <Container data={people} favoriteCard ={this.favoriteCard} type={'people'} />} />
        <Route exact path='/planets' render={() => <Container data={planets} favoriteCard={this.favoriteCard} type={'planets'} />} />
        <Route exact path='/vehicles' render={() => <Container data={vehicles} favoriteCard={this.favoriteCard} type={'vehicles'} />} />
        {/* <Route exact path = '/favorites' render ={({match}) => } */}
        <Route exact path='/people/:name' render={({ match }) => {
          const { name } = match.params
          let specificPerson = people.find(person => name === person.name)
          return specificPerson && <DetailsPage data={specificPerson} type={'people'} key={name} />
        }} />

        <Route exact path='/planets/:name' render={({ match }) => {
          const { name } = match.params
          let specificPlanet = planets.find(planet => name === planet.name)
          return specificPlanet && <DetailsPage data={specificPlanet} type={'planets'} key={name} />
        }} />

        <Route exact path='/vehicles/:name' render={({ match }) => {
          const { name } = match.params
          let specificVehicle = vehicles.find(vehicle => name === vehicle.name)
          return specificVehicle && <DetailsPage data={specificVehicle} type={'vehicles'} key={name} />
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

