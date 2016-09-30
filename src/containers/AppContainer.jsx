import React from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import Header from '../components/Header/Header'
import { Article } from '../flowtypes/stateTypes'

type PropsType = {
  pathname: string,
  posts: Array<Article>,
  dispatch: Function,
  children: ReactElement
}

const AppContainer =
  ({ pathname, posts, dispatch, children }: PropsType) => (
    <div className="main-app">
      <Header {...{ pathname, posts, dispatch }} />
      {children}
    </div>
  )

export default connect(
  ({ articleSummary, routing }) => ({
    posts: articleSummary.paginator,
    pathname: routing.locationBeforeTransitions.pathname
  })
)(AppContainer)
