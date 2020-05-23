import styled from '@emotion/styled'

export const StyledNavigationWrapper = styled.nav`
  align-self: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 24px;
  grid-column: 1/4;
  grid-row: 2/3;
  position: relative;
  text-align: center;

  a {
    color: black;
    padding: 0 12px;
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      color: #55d4eb;
    }
  }
`
