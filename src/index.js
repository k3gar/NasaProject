import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <img src='/assets/earth-3.png' alt='earth' className=' -z-10 fixed top-0  h-screen w-auto -right-72   pointer-events-none' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
