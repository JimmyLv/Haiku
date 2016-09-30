import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import { GITHUB, SUB_TITLE } from '../../constants'

import Article from '../../components/Blog/Article'
import SocialShare from '../../components/Blog/SocialShare'
import { fetchArticleIfNeeded } from '../../ducks/article'
import '../../components/Blog/Article.less'

type PropsType = {
  params: Object,
  meta: Object,
  content: string,
  dispatch: Function
}

@connect(
  ({ article }, { params }) => ({
    meta: article.meta,
    content: article.content,
    category: params.category,
    id: params.id,
  })
)
export default class BlogContentContainer extends Component {
  
  componentDidMount() {
    const { category, id } = this.props.params
    this.props.dispatch(fetchArticleIfNeeded(category, id))
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.params !== this.props.params) {
      const { category, id } = nextProps.params
      this.props.dispatch(fetchArticleIfNeeded(category, id))
    }
  }
  
  props: PropsType
  
  render() {
    const { meta, content } = this.props
    const { category, id } = this.props.params
    const filename = `_posts/${category}/${id}.md`
    const editUrl = `https://github.com/${GITHUB.user}/${GITHUB.repo}/edit/${GITHUB.branch}/${filename}`
    
    document.title = `${meta.title} | ${SUB_TITLE}`
    
    return (
      <div className="yue">
        <LoadingBar />
        <Article {...{ meta, content, editUrl, filename }} />
        <hr />
        <SocialShare {...meta} />
      </div>
    )
  }
}
