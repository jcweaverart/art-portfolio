import React from 'react'
import { useSelector } from 'react-redux'

import { StyledSectionWrapper } from '../containers/styled-section-wrapper'

export const SplashSection = props => {
  const title = useSelector(state => state.baseReducer.title)
  const bodyText = useSelector(state => state.baseReducer.bodyText)

  return (
    <StyledSectionWrapper>
      <header> {title} </header>
      <div> {bodyText} </div>
    </StyledSectionWrapper>
  )
}
