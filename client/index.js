import React from 'react'
import {render} from 'react-dom'

import App from './App'

import './sass/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})
