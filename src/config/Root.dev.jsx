import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

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