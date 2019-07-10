import sortData from './sortData'
import React from 'react'

  const currentMovie = async () => {
    try {
      const starWarsMovies = await fetch(`https://swapi.co/api/films/`)
        const results = await starWarsMovies.json()
      return results
    } catch (error) {
      throw Error(error)
    }
  }
  
  const fetchPageData = async (category) => {
    try {
      const url = `https://swapi.co/api/${category}/?page=`
      const result = await fetch(url)
        .then(response => response.json())
        .then(data => sortData(data.results, category))
        return result
    } catch (error) {
      throw Error(error)
    }
  }

  const fetchPeopleDetails = async (page) => {
    console.log(page)
    try {
      let personDetails = {}
      const result = await fetch(page)
        .then(response => response.json())
        return result
    } catch(error) {
      throw Error(error)
    }
  }


export {currentMovie, fetchPageData, fetchPeopleDetails}