import fetchJsonp from 'fetch-jsonp'
import { call, take, put, fork } from 'redux-saga/effects'

import {
  REQUEST_ARTICLE_SUMMARY,
  FETCH_ARTICLE_SUMMARY,
  FETCH_ARTICLE_SUMMARY_ERROR,
  REQUEST_MUSIC,
  FETCH_MUSIC,
  FETCH_MUSIC_ERROR
} from '../constants/actionTypes'

const fetchData = url => fetch(url).then(res => res.json())
const fetchJsonpData = url => fetchJsonp(url, { jsonpCallback: 'c' }).then(res => res.json())

function* fetchArticleSummary() {
  try {
    yield take(REQUEST_ARTICLE_SUMMARY)
    const json = yield call(fetchData, 'https://jimmylv.github.io/api/index.json')
    yield put({ type: FETCH_ARTICLE_SUMMARY, payload: json })
  } catch (err) {
    yield put({ type: FETCH_ARTICLE_SUMMARY_ERROR, payload: err })
  }
}

function* fetchMusicList() {
  try {
    yield take(REQUEST_MUSIC)
    const json = yield call(fetchJsonpData, 'https://app.mawenbao.com/music-api-server/?p=netease&t=playlist&i=429176788&q=high')
    yield put({
      type: FETCH_MUSIC,
      payload: json.songs
    })
  } catch (err) {
    yield put({ type: FETCH_MUSIC_ERROR, payload: err })
  }
}

export default function* rootSaga() {
  yield [
    fork(fetchMusicList),
    fork(fetchArticleSummary)
  ]
}