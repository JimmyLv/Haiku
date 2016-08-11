import { FETCH_MUSIC } from '../actions'

function musicList(state = {}, action) {
  switch (action.type) {
    case FETCH_MUSIC:
      return [...action.songs]
    default:
      return state
  }
}

export default musicList