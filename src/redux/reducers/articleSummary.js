import { FETCH_ARTICLE_SUMMARY, FETCH_ARTICLE_SUMMARY_ERROR } from '../actions'

function articleSummaryReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE_SUMMARY:
      return { ...action.payload }
    case FETCH_ARTICLE_SUMMARY_ERROR:
      console.warn('Failed to fetch article list: ', action.payload.err)
      return state
    default:
      return state
  }
}

export default articleSummaryReducer