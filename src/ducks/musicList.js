// @flow

import fetchJsonp from 'fetch-jsonp'
import { FETCH_MUSIC, FETCH_MUSIC_ERROR } from '../constants/actionTypes'
import type { Music } from '../flowtypes/stateTypes'
import type { MusicAction } from '../flowtypes/actionTypes'

export const fetchMusicList =
  () => (dispatch: Function) =>
    // fetchJsonp('https://api.lostg.com/music/163/collections/429176788')
    fetchJsonp('https://app.mawenbao.com/music-api-server/?p=netease&t=playlist&i=429176788&c=abc123&q=high')
      .then(res => res.json())
      .then(json => dispatch({
        type: FETCH_MUSIC,
        payload: {
          songs: json.map(song => ({
            name: song.title,
            url: song.location,
            artists: song.singer
          }))
        }
      }))
      .catch(err => dispatch({ type: FETCH_MUSIC_ERROR, payload: new Error(err.message) }))

const initialMusic = [{
  name: 'Feeling U',
  url: 'http://p2.music.126.net/zKr4hskGeZfxQbjbN15sdw==/7871403743831481.mp3',
  lrc_url: '',
  artists: 'm80',
  provider: 'http://music.163.com/'
}]

function musicListReducer(state: Array<Music> = initialMusic,
  action: MusicAction): Array<Music> {
  const { type, payload } = action
  
  switch (type) {
    case FETCH_MUSIC:
      return [...payload.songs]
    case FETCH_MUSIC_ERROR:
      console.warn('Failed to fetch music list!', payload)
      return state
    default:
      return state
  }
}

export default musicListReducer