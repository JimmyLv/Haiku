import React from 'react'
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

const AppContainer =
  ({ musicList, pathname, posts, dispatch, children }: PropsType) => (
    <div className="main-app">
      <Header {...{ musicList, pathname, posts, dispatch }} />
      {children}
    </div>
  )

export default connect(
  ({ musicList, articleSummary, routing }) => ({
    musicList,
    posts: articleSummary.paginator,
    pathname: routing.locationBeforeTransitions.pathname
  })
)(AppContainer)
