import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './components/Header'
import Container from './components/Container'
import Category from './components/Category'
import swapi from './swapi'
import { BrowserRouter as Router, Route, Link } from "react-browser-router";
import './App.css';


export class App extends Component {
  constructor () {
    super()
    this.state = {
      selected: false
    }
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
          <Link to='/People'><button className='selectCategoryBtn'>People</button></Link>
          <Link to='/Planets'><button className='selectCategoryBtn'>Planets</button></Link>
          <Link to='/Vehicles'><button className='selectCategoryBtn'>Vehicles</button></Link>
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

