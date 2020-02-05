import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar is-black">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-white title is-4 is-uppercase" to="/">Legends⛹🏽‍♂️</Link>
          </div>
          <div className="navbar-end">
            <Link className="has-text-left-mobile navbar-item has-text-white title is-4 is-uppercase" to="/players">Players</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar