import React from 'react'
import changeWeapon from './index'
import App from './App'


export default function Gun (props) {
  {
    changeWeapon('gun')
    handleClick(3)

  }
  return (
    <div>
      <h1 className="title">gun</h1>
      <body onClick={handleClick}></body>
    </div>
  )
}
