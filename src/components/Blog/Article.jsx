import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import MusicBox from '../../components/Blog/MusicBox'
import BookInfo from '../../components/Blog/BookInfo'
import ContentParser from '../../components/Blog/ContentParser'
import './Article.less'

const Article = ({ meta, content, editUrl, filename }) => (
  <article className="col-md-12 aside3-article">
    <div className="article-header">
      <h1 id="#identifier">{meta.title}</h1>
      <div className="article-meta">
        <span className="words">{content.length} words</span>
        <a className="content-edit" href={editUrl} target="_blank">{filename}</a>
      </div>
      {meta.music ? <MusicBox musicUrl={`http://music.163.com/outchain/player?type=2&id=${meta.music}&auto=0&height=66`}/> : ''}
    </div>
    <div className="article-content">
      {meta.layout === 'book' ? meta.books.map((book, index) => <BookInfo key={index} book={book}/>) :
        <ContentParser layout={meta.layout} content={content}/>
      }
    </div>
    <div className="article-tags">
      {meta.tags.map((tag, index) => <Link key={index} to={`/pages/tags/${tag}`}>{tag}</Link>)}
    </div>
  </article>
)

Article.propTypes = {
  meta: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  editUrl: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
}

export default Article