import React from 'react'
import  './styles/BadgesList.css'
class BadgesList extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.badges.map(badge => (
            <div className="Badge__container" key={badge.id}>
              <img src={badge.avatarUrl} alt="Avatar"/>
              <div className="Badge-info">
                <h5 className="Badge-name">{badge.firstName} {badge.lastName}</h5>
                <h6 className="Badge-twitter">@{badge.twitter}</h6>
                <h6>{badge.jobTitle}</h6>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default BadgesList