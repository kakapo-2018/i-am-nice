import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import Verbal from './Verbal'




const Home = () => {
    return (

      <div>
        <Link to='/punch'><img src='iconGlove.png'></img></Link>
        <Link to='/knife'><img src='iconKnife.png'></img></Link>
        <Link to='/hammer'><img src='iconHammer.png'></img></Link>
        <Link to='/gun'><img src='iconGun.png'></img></Link>

        <Link to='/verbal-abuse'><img src='verbalabuseIcon.png'></img></Link>

      </div>

    )
}

export default Home




