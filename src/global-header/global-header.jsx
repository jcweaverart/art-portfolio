import React from 'react'
import { useSelector } from 'react-redux'
import { StyledHeaderWrapper } from '../containers/styled-header-wrapper'

export const GlobalHeader = () => {
  const title = useSelector((state) => state.baseReducer.title)
  return <StyledHeaderWrapper>{title}</StyledHeaderWrapper>
}
