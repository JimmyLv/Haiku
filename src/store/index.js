import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { loadingBarMiddleware, loadingBarReducer } from 'react-redux-loading-bar'
import throttle from 'lodash/throttle'

// Apply the middleware to the store
import * as reducers from '../ducks'
import rootSaga from '../saga'
import { loadState, saveState } from './localStorage'
import configDevTools from '../config/DevTools'

const sagaMiddleware = createSagaMiddleware()

const store = window.store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
    loadingBar: loadingBarReducer
  }),
  loadState(),
  compose(
    applyMiddleware(
      routerMiddleware(hashHistory),
      loadingBarMiddleware(),
      thunkMiddleware,
      sagaMiddleware,
      createLogger()
    ),
    configDevTools()
  )
)

sagaMiddleware.run(rootSaga)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
