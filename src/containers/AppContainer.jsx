import React, { Component } from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import Header from '../components/Header/Header'
import { Music, Article } from '../flowtypes/stateTypes'

type PropsType = {
  musicList: Array<Music>,
  pathname: string,
  posts: Array<Article>,
  dispatch: Function,
  children: ReactElement
}

@connect(
  ({ musicList, articleSummary, routing }) => ({
    musicList,
    posts: articleSummary.paginator,
    pathname: routing.locationBeforeTransitions.pathname
  })
)
export default class AppContainer extends Component {
  props: PropsType

  render() {
    const { musicList, pathname, posts, dispatch } = this.props
    return (
      <div className="main-app">
        <Header {...{ musicList, pathname, posts, dispatch }}/>
        {this.props.children}
      </div>
    )
  }
}
