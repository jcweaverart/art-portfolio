import { SET_TITLE } from '../actions/base-actions'

export default function baseReducer(state = [], action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}
