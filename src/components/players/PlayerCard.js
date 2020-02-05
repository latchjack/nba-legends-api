import React from 'react'
import { Link } from 'react-router-dom'


const PlayerCard = ({ _id, name, nickName, image }) => (
  
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/players/${_id}`}>
      <div className="card">
        <div className="card-header player-header">
          <h4 className="card-header-title title is-4 has-text-white has-text-centered is-block is-uppercase">{name}</h4>
          
          
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="card-header-title title is-6 has-text-white has-text-centered is-block">&quot;{nickName}&quot;</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default PlayerCard