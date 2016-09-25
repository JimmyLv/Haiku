import { TOGGLE_SIDEBAR, TOGGLE_CONTENT } from '../constants/actionTypes'

export const toggleSideBar = () => ({ type: TOGGLE_SIDEBAR })

export const toggleContent = () => ({ type: TOGGLE_CONTENT })

const initialToggleState = {
  showSideBar: true,
  showContent: true
}

function toggleReducer(state = initialToggleState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSideBar: !state.showSideBar }
    case TOGGLE_CONTENT:
      return { ...state, showContent: !state.showContent }
    default:
      return state
  }
}

export default toggleReducer