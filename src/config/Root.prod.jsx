import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import renderRoutes from '../routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    {renderRoutes(history)}
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root