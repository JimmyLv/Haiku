import 'whatwg-fetch'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

import { GITHUB } from '../../constants'

const API_URL = `https://raw.githubusercontent.com/${GITHUB.user}/${GITHUB.repo}/${GITHUB.branch}/${GITHUB.folder}`

// TODO: move to src/constants/actionTypes.js

export const FETCH_ARTICLE: string = 'FETCH_ARTICLE'
export const FETCH_ARTICLE_ERROR: string = 'FETCH_ARTICLE_ERROR'
export const FETCH_ARTICLE_SUMMARY: string = 'FETCH_ARTICLE_SUMMARY'
export const FETCH_ARTICLE_SUMMARY_ERROR: string = 'FETCH_ARTICLE_SUMMARY_ERROR'
export const TOGGLE_SIDEBAR: string = 'TOGGLE_SIDEBAR'
export const TOGGLE_CONTENT: string = 'TOGGLE_CONTENT'

// TODO: refactoring to use dux modules, export default reducer but export as for action creators

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

export const fetchArticleSummary = () =>
  dispatch => fetch('http://jimmylv.github.io/api/index.json')
    .then(res => res.json())
    .then(json => dispatch({ type: FETCH_ARTICLE_SUMMARY, payload: json }))
    .catch(err => dispatch({ type: FETCH_ARTICLE_SUMMARY_ERROR, payload: err }))

export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR
})

export const toggleContent = () => ({
  type: TOGGLE_CONTENT
})

export const randomArticle = (category, id) => dispatch =>
  dispatch(fetchArticle(category, id))