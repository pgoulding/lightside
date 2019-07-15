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
      const url = `https://swapi.co/api/${category}/?page=`
      const result = await fetch(url)
      if(!result.ok) {
        throw Error('failed to fetch')
      }
      const response = await result.json()
      const data = await sortData(response.results, category)
      return data
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