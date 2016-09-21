import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import ReactDisqus from 'react-disqus-thread'
import { v4 } from 'node-uuid'

import { fetchArticleSummary } from '../../redux/actions'
import SideBar from '../../components/Blog/SideBar'
import './BlogContainer.less'

type Props = {
  categories: Array<Object>,
  showContent: boolean,
  dispatch: (actionCreator: Function) => void,
  params: Object,
  children: Object
}

@connect(
  (state) => ({
    categories: state.articleSummary.categories,
    showContent: state.toggle.showContent
  })
)
export default class BlogContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchArticleSummary())
  }

  props: Props

  handleNewComment(comment) {
    // TODO: change to action
    console.log({
      text: comment.text,
      id: v4()
    })
  }

  render() {
    const { categories, params } = this.props

    return (
      <div className="row">
        <SideBar selectedCategory={params.category || '思考'} categories={categories}/>
        <div className={classnames('col-md-8 col-xs-12 aside3', { 'm-hide': this.props.showContent })}>
          {React.cloneElement(this.props.children, { ...this.props })}
          <ReactDisqus
            shortname="nobackend-website"
            identifier="nobackend-website"
            title="Haiku"
            onNewComment={this.handleNewComment.bind(this)}
          />
        </div>
      </div>
    )
  }
}
