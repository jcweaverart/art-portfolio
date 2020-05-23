import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledSectionWrapper } from '../containers/styled-section-wrapper'

export const SplashGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 8px;
  margin: auto;
  max-width: 1100px;
`

export const SplashGalleryGridCell = styled.div`
  background-color: #f5c531;
`

export const SplashSection = (props) => {
  // const bodyContent = useSelector((state) => state.baseReducer.bodyText)
  return (
    <StyledSectionWrapper>
      <SplashGalleryGrid>
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
        <SplashGalleryGridCell />
      </SplashGalleryGrid>
    </StyledSectionWrapper>
  )
}
