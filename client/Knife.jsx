import React from 'react'
import changeWeapon from './index'

export default class Knife extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // health: null,
  //     beg: '',
    }
  }
  
  startBeg(){
    const begsForLife = [
      "Please", 
      "I have a family who needs me", 
      "I don't want to die....", 
      "I am afraid of death."
    ]
    
    let thisBeg = begsForLife[Math.floor(Math.random() *begsForLife.length)]
    
    return thisBeg
  }
  
  
  render (){

    {
      changeWeapon('knife')
    }

    return (
      <div>
    <h1 className="title">knife</h1>
    {this.startBeg()}
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