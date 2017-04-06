import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import ReactDisqus from 'react-disqus'
// import ReactDisqus from 'react-disqus-thread'

import SideBar from '../../components/Blog/SideBar'
import './BlogContainer.less'
import { Category } from '../../flowtypes/stateTypes'

type PropsType = {
  categories: Array<Category>,
  showContent: boolean,
  params: Object,
  children: Object
}

function BlogContainer(props: PropsType) {
  const { categories, params, showContent, children } = props

  return (
    <div className="row">
      <SideBar selectedCategory={params.category || '思考'} categories={categories} />
      <div className={classnames('col-md-8 col-xs-12 aside3', { 'm-hide': showContent })}>
        {React.cloneElement(children, { ...props })}
        <ReactDisqus
          shortname="nobackend-website"
          identifier="nobackend-website"
          pageurl="https://haiku.jimmylv.info"
        />
      </div>
    </div>
  )
}

export default connect(
  ({ articleSummary, toggle }) => ({
    categories: articleSummary.categories,
    showContent: toggle.showContent
  })
)(BlogContainer)
