import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import HomeHeader from '../../components/Blog/HomeHeader'
import PostPanel from '../../components/Blog/PostPanel'
import './BlogHomeContainer.less'

@connect(
  ({ articleSummary }) => ({
    tags: articleSummary.tags,
    paginator: articleSummary.paginator,
  })
)
export default class BlogHomePage extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    paginator: PropTypes.array.isRequired
  }

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
