import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import { HeaderContainer } from '../containers'
import { fetchMusicList } from '../redux/actions'

@connect()
export default class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }

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
