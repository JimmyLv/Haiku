import 'whatwg-fetch'

// TODO: move to src/constants/actionTypes.js

export const FETCH_ARTICLE_SUMMARY: string = 'FETCH_ARTICLE_SUMMARY'
export const FETCH_ARTICLE_SUMMARY_ERROR: string = 'FETCH_ARTICLE_SUMMARY_ERROR'
export const TOGGLE_SIDEBAR: string = 'TOGGLE_SIDEBAR'
export const TOGGLE_CONTENT: string = 'TOGGLE_CONTENT'

// TODO: refactoring to use dux modules, export default reducer but export as for action creators

export const fetchArticleSummary = () =>
  dispatch => fetch('https://jimmylv.github.io/api/index.json')
    .then(res => res.json())
    .then(json => dispatch({ type: FETCH_ARTICLE_SUMMARY, payload: json }))
    .catch(err => dispatch({ type: FETCH_ARTICLE_SUMMARY_ERROR, payload: err }))

export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR
})

export const toggleContent = () => ({
  type: TOGGLE_CONTENT
})
