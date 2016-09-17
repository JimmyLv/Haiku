import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { ToolBar } from '../components'
import { randomArticle } from '../redux/actions'

@connect(
  (state) => ({
    posts: state.articleSummary.paginator
  }),
  (dispatch) => ({
    randomArticle: (category, id) => dispatch(randomArticle(category, id))
  })
)
@withRouter
export default class ToolBarContainer extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    randomArticle: PropTypes.func.isRequired,
    router: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props)
    console.info('ToolBarContainer', props)
  }

  render() {
    return (
      <ToolBar
        posts={this.props.posts}
        router={this.props.router}
        randomArticle={this.props.randomArticle}
      />
    )
  }
}
