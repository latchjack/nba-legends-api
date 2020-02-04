import React from 'react'
import axios from 'axios'
import PlayerCard from '../players/PlayerCard'

class PlayerIndex extends React.Component {
  state = {
    players: []
  }

  async componentDidMount() {
    console.log('i have mounted')
    try {
      const res = await axios.get('/api/players')
      this.setState({ players: res.data })
    } catch (err) {
      console.log(err)
    }
  }



  render() {
    console.log('i have rendered')
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.players.map(player => (
              <PlayerCard key={player.name} {...player} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default PlayerIndex