import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import DevTools from './DevTools'
import renderRoutes from '../routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      {renderRoutes(history)}
      {!window.devToolsExtension ? <DevTools /> : null}
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root