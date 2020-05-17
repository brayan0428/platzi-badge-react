import React from 'react'
import  './styles/BadgesList.css'
import { Link } from 'react-router-dom'
class BadgesList extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.badges.map(badge => (
            <Link className="text-decoration-none text-reset" to={`badges/edit/${badge.id}`} key={badge.id}>
            <div className="Badge__container">
              <img src={badge.avatarUrl} alt="Avatar"/>
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
}

export default BadgesList