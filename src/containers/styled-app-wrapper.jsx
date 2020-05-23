import styled from '@emotion/styled'

export const StyledAppWrapper = styled.main`
  display: grid;
  grid-gap: 8px;
  grid-auto-rows: minmax(24px, auto);
  grid-template-columns: 1fr 1fr 1fr;
  font-family: Arial, sans-serif;
  margin: 0px 24px;
  position: relative;

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
