import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import store from './store/configure-store'

ReactDOM.render(<App store={store} />, document.getElementById('root'))
