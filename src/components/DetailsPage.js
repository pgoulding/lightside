import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.scss'

const DetailsPage = ({data, type}) => {
  let detailsCleaner = () => {
    let details = []
    for(const key in data) {
      if(data[key] !== Array) {
        details.push(`${key}: ${data[key]}`) 
      }
   }
   return details.filter(value => !value.includes('https://')).filter(times => !times.includes('2014')).map(detail => <h2>{detail}</h2>)
  }

  return (
    <div className="card-detail">
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      {detailsCleaner()}
    </div>
  )
}

DetailsPage.propTypes = {
  data: PropTypes.string,
  type: PropTypes.string
}

export default DetailsPage
