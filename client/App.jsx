import React from 'react'
import Home from './Home'
import Knife from './Knife'
import Gun from './Gun'
import Hammer from './Hammer'
import Punch from './Punch'
import Verbal from './Verbal'


import {HashRouter as Router, Route, Link} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weapons: 'punch.png',
      health: 10,
      insult:'',
      beg: ''
      }
    this.abuse = this.abuse.bind(this)
  }


  abuse(amount) {
    console.log(this.state.health)
  this.setState({health})
  }

  handleClick(){
    console.log('The page was clicked.' + healthPoints);
    this.setState(prevState => ({
      health: prevState - this.abuse()
    }));
  }

  render() {
    return (
      <Router>
      <div className='app-container section'>
        <h1>I am nice</h1>

        <Route path='/' component={Home} />
        <Route path="/knife" component={Knife}/>
        <Route path='/gun' component={Gun} />
        <Route path='/hammer' component={Hammer} />
        <Route path='/punch' component={Punch} />


        <Route exact path='/verbal-abuse' component={Verbal} />

    
      </div>
    </Router>
    )
  }
}

export default App
