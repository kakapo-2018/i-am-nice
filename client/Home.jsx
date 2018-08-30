import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import Verbal from './Verbal'




const Home = () => {
    return (

      <div>
        <Link to='/punch'><img src='punch.png'></img>punch</Link>
        <Link to='/knife'><img src='knife.png'></img>knife</Link>
        <Link to='/hammer'><img src='hammer.png'></img>hammer</Link>
        <Link to='/gun'><img src='gun.png'></img>gun</Link>

        <Link to='/verbal-abuse'><img src='insult.png'></img>Abuse</Link>



      </div>

    )
}

export default Home




