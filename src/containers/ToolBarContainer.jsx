import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { ToolBar } from '../components'

@connect(
  (state) => ({
    posts: state.articleSummary.paginator
  })
)
export default class ToolBarContainer extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    console.info('ToolBarContainer', props)
  }

  render() {
    const { posts, dispatch } = this.props
    return (
      <ToolBar {...{ posts, dispatch }} />
    )
  }
}
