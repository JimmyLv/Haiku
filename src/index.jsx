import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import '../node_modules/font-awesome-animation/dist/font-awesome-animation.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import 'bootstrap.css'
import 'yue.css'

import Root from './containers/Root'
import store from './redux/store/'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('app')
)
