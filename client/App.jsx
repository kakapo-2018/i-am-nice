import React from 'react'
import Home from './Home'
import Knife from './Knife'
import Gun from './Gun'
import Hammer from './Hammer'
import Punch from './Punch'

import {HashRouter as Router, Route, Link} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weapons: 'punch.png',
      health: 10
    }
    this.hurt = this.hurt.bind(this)
  }
  hurt(amount) {
    this.setState({health})
  }
  render() {
    return (
      <Router>
      <div className='app-container section'>
        <h1>I am nice</h1>

        <Route path='/' component={Home} />
        <Route path="/knife" component={Knife} />
        <Route path='/gun' component={Gun} />
        <Route path='/hammer' component={Hammer} />
        <Route path='/punch' component={Punch} />
    
      </div>
    </Router>
    )
  }
}

export default App
