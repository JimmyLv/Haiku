import { call, take, put } from 'redux-saga/effects'

import { REQUEST_ARTICLE_SUMMARY, FETCH_ARTICLE_SUMMARY, FETCH_ARTICLE_SUMMARY_ERROR } from '../constants/actionTypes'

const fetchData = url => fetch(url).then(res => res.json())

export default function* fetchArticleSummary() {
  try {
    yield take(REQUEST_ARTICLE_SUMMARY)
    const res = yield call(fetchData, 'https://jimmylv.github.io/api/index.json')
    yield put({ type: FETCH_ARTICLE_SUMMARY, payload: res })
  } catch (err) {
    yield put({ type: FETCH_ARTICLE_SUMMARY_ERROR, payload: err })
  }
}