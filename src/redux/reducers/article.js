// @flow

import jsyaml from 'js-yaml'
import { ArticleType } from '../flow/types.x'
import { API_URL } from '../../constants/'
import { FETCH_ARTICLE_ERROR, FETCH_ARTICLE } from '../../constants/actionTypes'

import { hideLoading, showLoading } from 'react-redux-loading-bar'

const shouldFetchArticle =
  (state, id) => !(state.article.id && state.article.id === id)

const receiveArticle = (content, id) => dispatch => {
  dispatch({
    type: FETCH_ARTICLE,
    payload: { id, content }
  })
  dispatch(hideLoading())
}

const fetchArticle = (category, id) => dispatch => {
  dispatch(showLoading())
  return fetch(`${API_URL}/${category}/${id}.md`)
    .then(res => res.text())
    .then(content => dispatch(receiveArticle(content, id)))
    .catch(err => dispatch({ type: FETCH_ARTICLE_ERROR, payload: err }))
}

export const fetchArticleIfNeeded = (category, id) => (dispatch, getState) => {
  if (shouldFetchArticle(getState(), id)) {
    return dispatch(fetchArticle(category, id))
  }
}

export const randomArticle = (category, id) => dispatch =>
  dispatch(fetchArticle(category, id))

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