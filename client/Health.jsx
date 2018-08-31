import React from 'react'
import restore from './index'
import changeWeapon from './index'


export default class Health extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // health: null,
  //     beg: '',
    }
  }
  


  
  render (){

    {
      changeWeapon('health')      // startBeg()
    }

    return (
      <div>
    </div>
    )
  }
}

/*
on click of knife object - make appear on page a begging

on click when holding the knife - bleed
--> start a minus health point 

--> if 3 cuts ---> start a setInterval every 5 secound - 1 health point

*/