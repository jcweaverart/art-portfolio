import SET_PAGE_LINKS from '../actions/navigation-actions'

export default function navigationReducer(state = [], action) {
  switch (action.type) {
    case SET_PAGE_LINKS:
      return {
        ...state,
        links: {
          ...state.links
        }
      }
    default:
      return state
  }
}
