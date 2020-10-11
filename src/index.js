import React from 'react'
import { render } from 'react-dom'

import './App.scss'

const App = () => <span className='lnr lnr-clock' />

render(
  <App />,
  document.getElementById('app')
)