import React, { Component, PropTypes } from 'react'

import HomeHeader from '../components/Blog/HomeHeader'
import PostPanel from '../components/Blog/PostPanel'
import './BlogHomePage.less'

class BlogHome extends Component {
  componentDidMount() {
  }

  render() {
    const { tags, paginator } = this.props
    const latestPostList = paginator.slice(0, 10)

    return (
      <div>
        <HomeHeader/>
        <div className="col-md-12">
          <PostPanel title={'最新文章'} postList={latestPostList}/>
          {tags.slice(0, 3).map((tag, index) => <PostPanel key={index} title={tag.name} postList={tag.posts}/>)}
        </div>
      </div>
    )
  }
}

BlogHome.propTypes = {
  tags: PropTypes.array.isRequired,
  paginator: PropTypes.array.isRequired
}
BlogHome.defaultProps = {}

export default BlogHome