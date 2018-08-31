import React from 'react'
import changeWeapon from './index'
import startBeg from './index'


export default class Knife extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // health: null,
  //     beg: '',
    }
  }
  


  
  render (){

    {
      changeWeapon('knife')
      // startBeg()
    }

    return (
      <div>
    <h1 className="title">knife</h1>
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