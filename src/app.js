import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/main.scss'

import Home from '../src/components/common/Home'
import PlayerIndex from '../src/components/players/PlayerIndex'
import Navbar from '../src/components/common/Navbar'
import PlayerShow from '../src/components/players/PlayerShow'


const App = () => (
  <BrowserRouter>
      <>
      <Navbar />
          <Switch>
            <Route path="/players/:id" component={PlayerShow} />
            <Route path="/players" component={PlayerIndex} />
            <Route exact path="/" component={Home} />
          </Switch>
        </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// async function getData() {
//   const response = await fetch('/api/players')
//   const data = await response.json()
//   console.log(data)
// }

// getData()