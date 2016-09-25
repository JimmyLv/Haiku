// @flow

import { FETCH_MUSIC, FETCH_MUSIC_ERROR } from '../actions'

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
      console.warn('Failed to fetch music list!')
      return state
    default:
      return state
  }
}

export default musicList