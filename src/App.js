import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './components/Header'
import Container from './components/Container'
import swapi from './swapi'
import { BrowserRouter as Router, Route, Link } from "react-browser-router";
import './App.css';
import human from './images/006-human.svg';
import planet from './images/007-universe.svg';
import vehicle from './images/002-star-wars.svg';


export class App extends Component {
  constructor () {
    super()
    this.state = {
      selected: false,
      category:'films',
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
  
  selectCategory = (page) => {
    this.setState({ category: page})
  }


  render() {
    const People = () => {
      return ( 
        <Container data={this.state.people}/>
      )
    }

    const Planets = () => {
      return (
        <Container data={this.state.planets}/>
      )
    }

    const Vehicles = () => {
      return (
        <Container data={this.state.vehicles} />
      )
    }

    return (
      <div className='App'>
        <Header />
        <section className='btnContainer'>
        <Router>
          <Link to='/People'>
            <button className='selectCategoryBtn' onClick={() => this.selectCategory('people')}>People<img className='icon' src={human} alt=''/></button>
          </Link>
          <Link to='/Planets'>
            <button className='selectCategoryBtn' onClick={() => this.selectCategory('planets')}>Planets<img className='icon' src={planet} alt=''/></button>
          </Link>
          <Link to='/Vehicles'>
            <button className='selectCategoryBtn' onClick={() => this.selectCategory('vehicles')}>Vehicles<img className='icon' src={vehicle} alt=''/></button>
          </Link>
          <Route path='People' component={People} />
          <Route path='Planets' component={Planets} />
          <Route path='Vehicles' component={Vehicles} />
        </Router>
        </section>
      </div>
    )
  }
}

export default App

