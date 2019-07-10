import React from 'react'

const sortData = (fetchData, category) => {
  if(category === 'people') {
    return fetchData.map(person => {
      return {
        name: person.name, 
        birth_year: person.birth_year, 
        gender: person.gender, 
        height:person.height,
        eye_color: person.eye_color,
        homeworld: person.homeworld,
        species: person.species,
        id: person.created,
        url:person.url
      }
    })
  } else if (category === 'planets') {
    return fetchData.map(planet => {
      return {
        name: planet.name, 
        terrain: planet.terrain,
        diameter: planet.diameter, 
        population: planet.population, 
        climate: planet.climate,
        residents: planet.residents,
        id: planet.created,
        url: planet.url
      }
    })
  } else if (category === 'vehicles') {
    return fetchData.map(vehicle => {
      return {
        name: vehicle.name,
        vehicle_class: vehicle.vehicle_class,
        model: vehicle.model,
        passengers: vehicle.passengers,
        id: vehicle.created,
        url: vehicle.url
      }
    })
  }
}

export default sortData
