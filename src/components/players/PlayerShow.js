import React from 'react'
import axios from 'axios'

class PlayerShow extends React.Component {
  state = {
    player: []
  }

  async componentDidMount() {
    const playerId = this.props.match.params.id
    console.log(playerId)
    try {
      const res = await axios.get(`/api/players/${playerId}`)
      this.setState({ player: res.data })
      console.log(this.state.player)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.player) return null
    console.log(this.state.player)
    const { name, nickName, dob, shirtNumber, position, team, points, assists, rebounds, rings, active, bio, image } = this.state.player
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop image is-1by5">
              <img className="show-image " src={image} alt={name} />
            </div>
            <div className="column is-half-desktop is-full-tablet is-full-mobile second">
              <div className="divide">
                <h2 className="title has-text-white is-size-1-desktop is-3-mobile show-title has-text-centered has-text-weight-bold">{name}</h2>
                <h4 className="has-text-weight-semibold has-text-white is-size-4-desktop is-size-6-mobile show-title has-text-centered">&quot;{nickName}&quot;</h4>
                <hr />
                <div className="score">
                  <div className="score-cicle">
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Jersey Number: {shirtNumber}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Team: {team}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Position Played: {position}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Points: {points}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Assists: {assists}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Rebounds: {rebounds}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Date of birth: {dob}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">NBA Champion: x{rings}</p>
                    <p className="has-text-white is-size-5-desktop is-size-6-mobile">Status: {active}</p>
                  </div>
                </div>
              </div>
              <hr />
              
              <p><span className="has-text-white is-size-3-desktop is-size-4-mobile has-text-weight-bold">Biography</span>
                <br />
                <span className="has-text-white is-size-5-desktop is-size-6-mobile">{bio}</span></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PlayerShow