import React, { useState } from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'

function BadgesList(props) {

  const [query, setQuery] = useState('')

  const badges = props.badges

  const filteredBadges = badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div>
      <div className="form-group">
        <label>Buscar</label>
        <input type="text" className="form-control" value={query} onChange={e => {
          setQuery(e.target.value)
        }}/>
      </div>
      {
        filteredBadges.map(badge => (
          <Link className="text-decoration-none text-reset" to={`badges/${badge.id}`} key={badge.id}>
            <div className="Badge__container">
              <img src={badge.avatarUrl} alt="Avatar" />
              <div className="Badge-info">
                <h5 className="Badge-name">{badge.firstName} {badge.lastName}</h5>
                <h6 className="Badge-twitter">@{badge.twitter}</h6>
                <h6>{badge.jobTitle}</h6>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default BadgesList