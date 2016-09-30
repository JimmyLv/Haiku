import React from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import Header from '../components/Header/Header'
import { Article } from '../flowtypes/stateTypes'

type PropsType = {
  posts: Array<Article>,
  dispatch: Function,
  children: ReactElement
}

const AppContainer =
  ({ posts, dispatch, children }: PropsType) => (
    <div className="main-app">
      <Header {...{ posts, dispatch }} />
      {children}
    </div>
  )

export default connect(
  ({ articleSummary }) => ({
    posts: articleSummary.paginator,
  })
)(AppContainer)
