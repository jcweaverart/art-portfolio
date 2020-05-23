import React from 'react'
import { StyledSectionWrapper } from '../containers/styled-section-wrapper'
import { GalleryGrid } from '../common/gallery-template'

export const SplashPage = (props) => {
  return (
    // Gallery Section
    <StyledSectionWrapper>
      <GalleryGrid />
    </StyledSectionWrapper>
  )
}
