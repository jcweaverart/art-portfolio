export const SET_TITLE = 'SET_TITLE'

export function setTitle(title) {
  console.log('Setting title to: ', title)

  return {
    title,
    type: 'SET_TITLE'
  }
}
