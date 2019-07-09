import React from 'react'

const sortData = (fetchData, category) => {
  console.log(fetchData)
  if(category === 'people') {
    console.log('people category')
    return fetchData.map(person => {
      return {
        name: person.name, 
        "birth year": person.birth_year, 
        gender: person.gender, 
        height:person.height,
        "eye color": person.eye_color,
        homeworld: person.homeworld,
        species: person.species,
        "home world population": person.homeworld,
        isFavorited: false,
        id: person.created
      }
    })
  } else if (category === 'planets') {
    return fetchData.map(planet => {
      return {
        name: planet.name, 
        diameter: planet.diameter, 
        population: planet.population, 
        climate: planet.climate,
        residents: planet.residents,
        isFavorited: false,
        id: planet.created
      }
    })
  } else if (category === 'vehicles') {
    return fetchData.map(vehicle => {
      return {
        name: vehicle.name,
        "class": vehicle.vehicle_class,
        model: vehicle.model,
        passengers: vehicle.passengers,
        id: vehicle.created
      }
    })
  }
}

export default sortData