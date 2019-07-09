import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './Header'
import Container from './Container'
import { BrowserRouter, Route, Link } from "react-router-dom";
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
      pageNumber: '',
      favorites: []
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

  addFavorite = (newFave) => {
    this.state.favorites.push(newFave)
    this.setState({ favorites: [...this.state.favorites]})
  }

  removeFavorite = (id) => {
   const filteredFavorites = this.state.favorites.filter(fav => fav.id !== id);
   this.setState({ favorites: filteredFavorites })
  }

  noFavesMessage = () => {
    return (
      <div className='noFavesMessage'>
        <h2>To display, no favorites you have.</h2>
      </div>
    )
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
    const { people, planets, vehicles, favorites } = this.state;

    return (
      <section>
        <Route exact path='/people' render={() => 
          <Container 
            addFavorite={this.addFavorite} 
            removeFavorite={this.removeFavorite}
            favorites={favorites} 
            data={people} 
            type={'people'} />} />

        <Route exact path='/planets' render={() => 
          <Container 
            addFavorite={this.addFavorite} 
            removeFavorite={this.removeFavorite}
            favorites={favorites} 
            data={planets} 
            type={'planets'} />} />

        <Route exact path='/vehicles' render={() => 
          <Container 
            addFavorite={this.addFavorite} 
            removeFavorite={this.removeFavorite}
            favorites={favorites} 
            data={vehicles} 
            type={'vehicles'} />} />

        <Route exact path='/favorites' render={() => 
          <Container 
           addFavorite={this.addFavorite} 
           removeFavorite={this.removeFavorite}
           favorites={favorites} 
           data={favorites} 
           type={'favorites'}
         />
      } />


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
        {!this.state.showSplash && <Header favorites={this.state.favorites.length}/>}
        {this.state.showSplash && this.state.film && <MovieIntro toggleSplash={this.toggleSplash} films={ this.state.film }/>}
        <main className= 'clickedMain' >
        {!this.state.showSplash && this.buttonConatiner()}
        {!this.state.showSplash && this.cardsContainer()}
        </main>
      </main>
    )
  }
}

export default App

