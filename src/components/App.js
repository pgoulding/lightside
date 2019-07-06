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
        .then(swData => this.setState({[category]: swData.results }))
        .catch(err => console.error(err))
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
    return (
      <section>
        {/* <Route path='/' component={<MovieIntro toggleSplash={this.toggleSplash} films={this.state.film} />} /> */}
        <Route path='/People' render={() => <Container data={this.state.people} />} />
        <Route path='/Planets' render={() => <Container data={this.state.planets} />} />
        <Route path='/Vehicles' render={() => <Container data={this.state.vehicles} />} />
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

