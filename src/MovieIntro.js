import React, { Component } from 'react'
const MovieIntro = ({ films }) => {
    

  return (
    <div className="scroller-text">
      <h2>{films.title}</h2>
      <p>{films.opening_crawl}</p>
    </div>
  )
}

export default MovieIntro