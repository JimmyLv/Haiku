import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'whatwg-fetch'
import 'bootstrap.css'
import 'yue.css'

import '!file?name=[name].[ext]!../manifest.json'
import '../node_modules/font-awesome-animation/dist/font-awesome-animation.css'
import '../node_modules/font-awesome/css/font-awesome.css'

import Root from './config/Root'
import store from './store/'

require('es6-promise').polyfill()

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
