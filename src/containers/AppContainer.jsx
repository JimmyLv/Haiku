import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './AppContainer.less'
import { HeaderContainer } from '../containers'
import * as actionCreators from '../redux/actions'

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchMusicList()
  }

  render() {
    console.info('AppContainer', this.props)
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
  fetchMusicList: func.isRequired,
  children: object.isRequired
}
AppContainer.defaultProps = {}

export default connect(
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(AppContainer)