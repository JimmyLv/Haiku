// @flow

import jsyaml from 'js-yaml'

import { FETCH_ARTICLE, FETCH_ARTICLE_ERROR } from '../actions'
import { ArticleType } from '../flow/types.x'

const initialArticle = {
  id: '/2011-11-11-hello-world/',
  meta: {
    title: 'Hello World!',
    layout: 'post',
    tags: ['hello', 'world']
  },
  content: 'Hell0 W0rld!'
}

function articleReducer(state: ArticleType = initialArticle,
                        action: ArticleAction): ArticleType {
  const { type, payload } = action
  
  switch (type) {
    case FETCH_ARTICLE: {
      const result = payload.content.split('---')
      return {
        id: payload.id,
        meta: jsyaml.load(result[1]),
        content: result.slice(2).join('---')
      }
    }
    case FETCH_ARTICLE_ERROR:
      console.warn('Failed to fetch article: ', payload)
      return state
    default:
      return state
  }
}

export default articleReducer