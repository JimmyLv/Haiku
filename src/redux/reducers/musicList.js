// @flow

import { FETCH_MUSIC, FETCH_MUSIC_ERROR } from '../../constants/actionTypes'

export const fetchMusicList = () =>
    dispatch => fetch('http://app.atime.me/music-api-server/?p=netease&t=playlist&i=389445274', { mode: 'no-cors' })
        .then(res => res.json())
        .then(json => dispatch({ type: FETCH_MUSIC, payload: { songs: json.songs } }))
        .catch(err => dispatch({ type: FETCH_MUSIC_ERROR, payload: new Error(err.message) }))

const initialMusic = [{
  name: 'Feeling U',
  url: 'http://p2.music.126.net/zKr4hskGeZfxQbjbN15sdw==/7871403743831481.mp3',
  lrc_url: '',
  artists: 'm80',
  provider: 'http://music.163.com/'
}]

function musicList(state: Array<Music> = initialMusic, action: MusicAction): Array<Music> {
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

export default musicList