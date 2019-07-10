import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './Header'
import Container from './Container'
import ButtonContainer from './ButtonContainer';
import { Route, Redirect } from "react-router-dom";
import './App.css';
import DetailsPage from './DetailsPage'
import sortData from './sortData'
import {currentMovie, fetchPageData} from './swapi'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      showSplash: true,
      selected:false,
      pageNumber: '',
      favorites: []
    }
  }

  componentDidMount(){
    this.findMovie()
    this.updatePage()
  }

  findMovie = () => {
    currentMovie()
      .then(movie => this.setState({ film: movie.results.find(movie => {
        return movie.episode_id === Math.floor(Math.random() * (7 - 2 + 1)) + 1
      })
    })) 
      .catch(err => this.setState({error: err}))
  }

  updatePage = () => {
    let categories = ['people', 'planets', 'vehicles']
    return categories.map(category => {
      fetchPageData(category)
        .then(swData => this.setState({[category]: swData }))
        .catch(err => this.setState({error: err}))
    })
  }

  favoriteCard = (name, category) => {
    let card = this.state[category].find(obj => obj.name === name)
    card.isFavorited = !card.isFavorited
    this.setState({[category]: [...this.state[category]]})
  }

  animateButtons = () => {
    this.setState({ selected:true })
  }

  restoreHomePage = () => {
    this.setState({ selected: false})
  }

  toggleSplash = () => {
    this.setState({ showSplash: false })
  }

  addFavorite = (newFave) => {
    this.setState({ favorites: [...this.state.favorites, newFave]})
  }

  removeFavorite = (id) => {
   const filteredFavorites = this.state.favorites.filter(fav => fav.id !== id);
   this.setState({ favorites: filteredFavorites })
  }

  favoritesPage = () => {
    if(this.state.favorites.length) {
      return  <Container 
      addFavorite={this.addFavorite} 
      removeFavorite={this.removeFavorite}
      favorites={this.state.favorites} 
      data={this.state.favorites} 
      type={'favorites'}
    /> 
    } else {
      return (
        <div className='noFavesMessage'>
          <h2>To display, no favorites you have.</h2>
        </div>
      )
    }
  }

  


  cardsContainer = () => {
    const { people, planets, vehicles, favorites } = this.state;


    return (
      <section>
       <Route exact path='/people' render={() => (
         this.state.selected ?
          <Container 
            addFavorite={this.addFavorite} 
            removeFavorite={this.removeFavorite}
            favorites={favorites} 
            data={people} 
            type={'people'} /> : 
          <Redirect to='/' />
       )} />
        <Route exact path='/planets' render={() => (
          this.state.selected ?
          <Container 
            addFavorite={this.addFavorite} 
            removeFavorite={this.removeFavorite}
            favorites={favorites} 
            data={planets} 
            type={'planets'} /> :
            <Redirect to='/' />            
            )} />

        <Route exact path='/vehicles' render={() => (
          this.state.selected ?
          <Container 
              addFavorite={this.addFavorite} 
              removeFavorite={this.removeFavorite}
              favorites={favorites} 
              data={vehicles} 
              type={'vehicles'} /> :
              <Redirect to='/' />
              )}/>

        <Route exact path='/favorites' render={() => (
          this.state.selected ? 
          this.favoritesPage('/favorites') :
          <Redirect to='/'/>
          )} />

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

        <Route exact path='/favorites/:name' render={({ match }) => {
          const { name } = match.params
          let specificFav = favorites.find(fav => name === fav.name)
          return specificFav && <DetailsPage data={specificFav} type={'favorites'} key={name} />
        }} />
      </section>
    )
  }

  render() {


    return (
      <main className='App'>
<<<<<<< HEAD
        {!this.state.showSplash && 
          <Header  
            restoreHomePage={this.restoreHomePage} 
            animateButtons={this.animateButtons} 
            favorites={this.state.favorites.length}
            />}
        {this.state.showSplash && this.state.film && <MovieIntro toggleSplash={this.toggleSplash} films={ this.state.film }/>}
=======
        {!this.state.showSplash && <Header restoreHomePage={this.restoreHomePage} favorites={this.state.favorites.length}/>}
        {this.state.showSplash && this.state.film && <MovieIntro toggleSplash={this.toggleSplash} movie={ this.state.film }/>}
>>>>>>> 7062a4bd275289e38e2f7e677f1a6eb1415432c1
        <main className= 'clickedMain' >
        {!this.state.showSplash && <ButtonContainer animateButtons={this.animateButtons} selected={this.state.selected} />}
        {!this.state.showSplash && this.cardsContainer()}
        </main>
      </main>
    )
  }
}

export default App

