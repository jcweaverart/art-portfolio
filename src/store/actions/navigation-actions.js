export const SET_PAGE_LINKS = 'SET_PAGE_LINKS'

export function setPageLinks(links) {
  console.log('Set links here: ', links)

  return {
    links,
    type: 'SET_PAGE_LINKS'
  }
}
