import React from 'react'
import { Link } from 'react-router-dom'


const PlayerCard = ({ _id, name, nickName, dob, shirtNumber, position, team, points, rings, active, image }) => (
  
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/players/${_id}`}>
      <div className="card">
        <div className="card-header player-header">
          <h4 className="card-header-title title is-4 has-text-black">{name}</h4>
          
          
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={nickName} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="card-header-title title is-4 has-text-black">Nickname: {nickName}</h5>
          <h6 className="card-header-title title is-4 has-text-black">Shirt#:{shirtNumber}</h6>
          <h5 className="title is-4 has-text-black">👶🏽 {dob}</h5>
          <h5 className="title is-4 has-text-black">🏀 {position}</h5>
          <h5 className="title is-4 has-text-black">🏀 {team}</h5>
          <h5 className="title is-4 has-text-black">🏀 {points}</h5>
          <h5 className="title is-4 has-text-black">🏆 {rings}</h5>
          <h5 className="title is-4 has-text-black">👴🏽Still playing? {active}</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default PlayerCard