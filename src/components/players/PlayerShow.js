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
    const { name, nickName, dob, shirtNumber, position, team, points, rings, active, image } = this.state.player
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half-desktop">
              <img className="show-image" src={image} alt={name} />
            </div>
            <div className="column is-half-desktop is-full-tablet is-full-mobile second">
              <div className="divide">
                <h2 className="title has-text-white is-2 show-title">{name}</h2>
                <h4 className="title has-text-white is-2 show-title">{nickName}</h4>
                <div className="score">
                  <div className="score-cicle">
                    <p className="has-text-white">{dob}</p>
                    <p className="has-text-white">{shirtNumber}</p>
                    <p className="has-text-white">{position}</p>
                    <p className="has-text-white">{team}</p>
                    <p className="has-text-white">{rings}</p>
                    <p className="has-text-white">Still playing?: {active}</p>
                    <p className="has-text-white">{points}</p>
                  </div>
                </div>
              </div>
              <hr />
              
              <p className="subtitle has-text-white">{points}</p>
              <p className="subtitle has-text-white has-text-weight-bold">{active}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PlayerShow