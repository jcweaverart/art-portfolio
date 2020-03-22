import React from 'react'
import { css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { StyledNavigationWrapper } from '../containers/styled-navigation-wrapper'

const activeClassName = ''

export const GlobalNavigation = () => {
  return (
    <StyledNavigationWrapper>
      <NavLink activeClassName={activeClassName} to='/'>
        Home
      </NavLink>
      <NavLink activeClassName={activeClassName} to='/work'>
        My work
      </NavLink>
      <NavLink activeClassName={activeClassName} to='/about'>
        About me
      </NavLink>
      <NavLink activeClassName={activeClassName} to='/contact'>
        Contact
      </NavLink>
    </StyledNavigationWrapper>
  )
}
