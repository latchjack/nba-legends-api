import React from 'react'
import axios from 'axios'

class PlayerShow extends React.Component {
  state = {
    player: []
  }

  async componentDidMount() {
    const playerId = this.props.match.params.id
    try {
      const res = await axios.get(`/players/${playerId}`)
      this.setState({ player: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
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
                <h2 className="title has-text-black is-2 show-title">{name}</h2>
                <h4 className="title has-text-black is-2 show-title">{nickName}</h4>
                <div className="score">
                  <div className="score-cicle">
                    <p className="score-num">{dob}</p>
                    <p className="score-num">{shirtNumber}</p>
                    <p className="score-num">{position}</p>
                    <p className="score-num">{team}</p>
                    <p className="score-num">{rings}</p>
                    <p className="score-num">{active}</p>
                    <p className="subtitle has-text-grey">{points}</p>
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