import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle } from '../store/actions/base-actions'
import { StyledSectionWrapper } from '../containers/styled-section-wrapper'

export const SplashSection = props => {
  const title = useSelector(state => state.baseReducer.title)
  const bodyText = useSelector(state => state.baseReducer.bodyText)

  const dispatch = useDispatch()

  return (
    <StyledSectionWrapper>
      <header> {title} </header>
      <button
        onClick={() => {
          // console.log(useSelector(state => state.baseReducer.title))
          dispatch(setTitle('random text'))
        }}
      >
        Click
      </button>
      <div> {bodyText} </div>
    </StyledSectionWrapper>
  )
}
