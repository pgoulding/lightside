import React from 'react'
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'

const MovieIntro = ({ films }) => {
  const {episode_id, title, opening_crawl} = films
  return (
    <Crawl
      title={episode_id}
      subTitle={title}
      text={opening_crawl}
    />
  )
}

export default MovieIntro