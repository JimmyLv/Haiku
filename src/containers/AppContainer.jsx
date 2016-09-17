import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import { HeaderContainer } from '../containers'
import { fetchMusicList } from '../redux/actions'

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMusicList())
  }

  render() {
    return (
      <div className="main-app">
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}

const { func, object } = PropTypes
AppContainer.propTypes = {
  dispatch: func.isRequired,
  children: object.isRequired
}
AppContainer.defaultProps = {}

export default connect()(AppContainer)