// @flow

import jsyaml from 'js-yaml'

import { FETCH_ARTICLE, FETCH_ARTICLE_ERROR } from '../actions'

const initialArticle = {
  id: '/2011-11-11-hello-world/',
  meta: {
    title: 'Hello World!',
    layout: 'post',
    tags: ['hello', 'world']
  },
  content: 'Hell0 W0rld!'
}

function articleReducer(state: Article = initialArticle, action: ArticleAction): Article {
  switch (action.type) {
    case FETCH_ARTICLE: {
      const result = action.payload.content.split('---')
      return {
        id: action.payload.id,
        meta: jsyaml.load(result[1]),
        content: result.slice(2).join('---')
      }
    }
    case FETCH_ARTICLE_ERROR:
      console.warn('Failed to fetch article: ', action.payload.err)
      return state
    default:
      return state
  }
}

export default articleReducer