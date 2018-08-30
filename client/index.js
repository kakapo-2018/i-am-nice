import React from 'react'
import {render} from 'react-dom'
import App from './App'


document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})
