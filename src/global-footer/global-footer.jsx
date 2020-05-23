import styled from '@emotion/styled'

import React from 'react'
import { StyledFooterWrapper } from '../containers/styled-footer-wrapper'

const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 8px;
`

const FooterGridCell = styled.div`
  background-color: #55d4eb;
`

export const GlobalFooter = () => {
  return (
    <StyledFooterWrapper>
      <FooterGridContainer>
        <FooterGridCell />
        <FooterGridCell />
        <FooterGridCell />
      </FooterGridContainer>
    </StyledFooterWrapper>
  )
}
