import React from 'react'
import { Link } from 'react-router-dom';
import './Card.scss'

const DetailsPage = ({data, type, fetchPeopleDetails}) => {
  let detailsCleaner = () => {
    let details = []
    for(const key in data) {
      if(data[key] !== Array) {
        details.push(`${key}: ${data[key]}`) 
      }
   }
   return details.filter(value => !value.includes('https://')).filter(times => !times.includes('2014')).map(detail => <h2>{detail}</h2>)
  }

  if(type=== 'people') {
    fetchPeopleDetails(data.url)
  }

  return (
    <div className="card-detail">
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      {detailsCleaner()}
    </div>
  )
}

export default DetailsPage
