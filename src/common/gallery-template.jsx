import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'

export const GridGalleryTemplate = styled.div`
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

export const GalleryGrid = (props) => {
  // will most likely be using this to retrieve a fetch to a social media source
  // const bodyContent = useSelector((state) => state.baseReducer.bodyText)
  return (
    <GridGalleryTemplate>
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
    </GridGalleryTemplate>
  )
}
