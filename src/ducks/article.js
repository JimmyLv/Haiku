// @flow

import jsyaml from 'js-yaml'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

import { API_URL } from '../constants/'
import { FETCH_ARTICLE_ERROR, FETCH_ARTICLE } from '../constants/actionTypes'
import type { Article } from '../flowtypes/stateTypes'
import type { ArticleAction } from '../flowtypes/actionTypes'

const shouldFetchArticle =
  ({ article }, id) => !(article.id && article.id === id)

const receiveArticle =
  (content, id) => (dispatch: Function) => {
    dispatch({ type: FETCH_ARTICLE, payload: { id, content } })
    dispatch(hideLoading())
  }

export const fetchArticle =
  (category: string, id: string) => (dispatch: Function) => {
    dispatch(showLoading())
    return fetch(`${API_URL}/${category}/${id}.md`)
      .then(res => res.text())
      .then(content => dispatch(receiveArticle(content, id)))
      .catch(err => dispatch({ type: FETCH_ARTICLE_ERROR, payload: err }))
  }

export const fetchArticleIfNeeded =
  (category: string, id: string) => (dispatch: Function, getState: Function) => {
    if (shouldFetchArticle(getState(), id)) {
      return dispatch(fetchArticle(category, id))
    }
  }

const initialArticle = {
  id: '/2011-11-11-hello-world/',
  meta: {
    title: 'Hello World!',
    layout: 'post',
    tags: ['hello', 'world']
  },
  content: 'Hell0 W0rld!'
}

function articleReducer(state: Article = initialArticle,
  action: ArticleAction): Article {
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
      console.warn(`Failed to fetch article: ${payload.id}`)
      return state
    default:
      return state
  }
}

export default articleReducer