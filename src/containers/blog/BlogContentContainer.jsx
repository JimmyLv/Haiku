import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import { GITHUB, SUB_TITLE } from '../../constants'

import Article from '../../components/Blog/Article'
import SocialShare from '../../components/Blog/SocialShare'
import '../../components/Blog/Article.less'

type PropsType = {
  meta: Object,
  content: string,
  category: string,
  id: string
}

const BlogContentContainer = ({ meta, content, category, id }: PropsType) => {
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

export default connect(
  ({ article }, { params }) => ({
    meta: article.meta,
    content: article.content,
    category: params.category,
    id: params.id,
  })
)(BlogContentContainer)
