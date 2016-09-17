import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.clearSearch = this.clearSearch.bind(this)
    this.randomPost = this.randomPost.bind(this)
  }

  clearSearch() {
    this.refs.searchText.value = ''
  }

  randomPost() {
    const { posts, randomArticle } = this.props
    const post = posts[Math.floor(Math.random() * posts.length)]
    // this.props.router.push({
    //   pathname: '/note-blog',
    //   hash: `/${post.category}${post.url}`
    // })
    browserHistory.push(`#/note-blog/${post.category}${post.url}`)
    randomArticle(post.category, post.url.split('/')[1])
  }

  render() {
    return (
      <div className="tool-bar">
        <input className="default-search m-hide" ref="searchText" placeholder="Search..." type="text"/>
        <span className="cancel-search m-hide" onClick={this.clearSearch}><i className="fa fa-times"/></span>
        <span className="random-post"><a onClick={this.randomPost}>随机文章</a></span>
      </div>
    )
  }
}

ToolBar.propTypes = {
  posts: PropTypes.array.isRequired,
  randomArticle: PropTypes.func.isRequired,
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
}
ToolBar.defaultProps = {}

export default ToolBar