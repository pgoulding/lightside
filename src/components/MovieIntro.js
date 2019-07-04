import React from 'react'
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'

const MovieIntro = ({ films }) => {
  const {episode_id, title, opening_crawl} = films
  const swapEpisodeNum = () => {
    let epsiodeNumerals = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']
    return epsiodeNumerals[episode_id]
  }
  return (
    <Crawl
      title={`Episode ${swapEpisodeNum()}`}
      subTitle={title}
      text={opening_crawl}
    />
  )
}

export default MovieIntro