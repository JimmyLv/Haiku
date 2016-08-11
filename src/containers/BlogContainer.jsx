import React, { Component, PropTypes, } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import ReactDisqus from 'react-disqus-thread'

import { fetchArticleSummary } from '../redux/actions'
import SideBar from '../components/Blog/SideBar'
import './BlogContainer.less'

class BlogContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchArticleSummary())
  }

  handleNewComment(comment) {
    console.log(comment.text)
  }

  render() {
    const { categories } = this.props

    return (
      <div className="row">
        <SideBar categories={categories}/>
        <div className={classnames('col-md-8 col-xs-12 aside3', { 'm-hide': this.props.showContent })}>
          {React.cloneElement(this.props.children, { ...this.props })}
          <ReactDisqus
            shortname="nobackend-website"
            identifier="nobackend-website"
            title="TAiKu"
            onNewComment={this.handleNewComment.bind(this)}
          />
        </div>
      </div>
    )
  }
}

BlogContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  showContent: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}
BlogContainer.defaultProps = {}

function mapStateToProps(state) {
  return {
    ...state.articleSummary,
    ...state.toggle
  }
}

export default connect(mapStateToProps)(BlogContainer)