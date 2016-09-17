import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

import { GITHUB } from '../../constants'

const API_URL = `https://raw.githubusercontent.com/${GITHUB.user}/${GITHUB.repo}/${GITHUB.branch}/${GITHUB.folder}`

export const FETCH_MUSIC = 'FETCH_MUSIC'
export const FETCH_MUSIC_ERROR = 'FETCH_MUSIC_ERROR'
export const FETCH_ARTICLE = 'FETCH_ARTICLE'
export const FETCH_ARTICLE_SUMMARY = 'FETCH_ARTICLE_SUMMARY'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_CONTENT = 'TOGGLE_CONTENT'

// TODO: refactoring to use dux modules, export default reducer but export as for action creators

const shouldFetchArticle =
  (state, id) => !(state.article.id && state.article.id === id)

const receiveArticle = (content, id) => dispatch => {
  dispatch(hideLoading())
  dispatch({
    type: FETCH_ARTICLE,
    payload: { id, content }
  })
}

const fetchArticle = (category, id) => dispatch => {
  dispatch(showLoading())
  return fetch(`${API_URL}/${category}/${id}.md`)
    .then(res => res.text())
    .then(content => dispatch(receiveArticle(content, id)))
    .catch(error => console.info('request error: ', error))
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
    .catch(err => console.error('Failed to fetch article list: ', err))

export const fetchMusicList = () =>
  dispatch => fetchJsonp('http://app.atime.me/music-api-server/?p=netease&t=playlist&i=389445274')
    .then(res => res.json())
    .then(json => dispatch({ type: FETCH_MUSIC, payload: json }))
    .catch(err => dispatch({ type: FETCH_MUSIC_ERROR, payload: err }))
// .catch(err => console.error('Failed to fetch music list: ', err))

export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR
})

export const toggleContent = () => ({
  type: TOGGLE_CONTENT
})

export const randomArticle = (category, id) => dispatch =>
  dispatch(fetchArticle(category, id))