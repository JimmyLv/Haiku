import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { ToolBar } from '../components'

class ToolBarContainer extends Component {
  constructor(props) {
    super(props)
    console.info('ToolBarContainer', props)
  }

  render() {
    return (
      <ToolBar
        posts={this.props.posts}
        router={this.props.router}
      />
    )
  }
}

ToolBarContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
}
ToolBarContainer.defaultProps = {}

function mapStateToProps(state) {
  return { posts: state.articleSummary.paginator }
}

export default connect(
  mapStateToProps
)(withRouter(ToolBarContainer))
