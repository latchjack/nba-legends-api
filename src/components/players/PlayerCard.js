import React from 'react'
import { Link } from 'react-router-dom'


const PlayerCard = ({ _id, name, nickName, dob, shirtNumber, position, team, points, rings, image }) => (
  
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/players/${_id}`}>
      <div className="card">
        <div className="card-header player-header">
          <h4 className="card-header-title title is-4 has-text-white has-text-centered is-block">{name}</h4>
          
          
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={nickName} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="card-header-title title is-6 has-text-white has-text-centered is-block">Nickname: {nickName}</h5>
          <h6 className="card-header-title title is-5 has-text-white">Shirt#: {shirtNumber}</h6>
          <h5 className="title is-6 has-text-white">👶🏽 {dob}</h5>
          <h5 className="title is-6 has-text-white">🏀 {position}</h5>
          <h5 className="title is-6 has-text-white">🏀 {team}</h5>
          <h5 className="title is-6 has-text-white">🏀 {points}</h5>
          <h5 className="title is-6 has-text-white">🏆 {rings}x NBA Champion</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default PlayerCard