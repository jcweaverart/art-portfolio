import React from 'react'
import { useSelector } from 'react-redux'
import { css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { StyledNavigationWrapper } from '../containers/styled-navigation-wrapper'

const activeClassName = ''

export const GlobalNavigation = () => {
  const links = useSelector(state => state.navigationReducer.links)

  return (
    <StyledNavigationWrapper>
      <NavLink activeClassName={activeClassName} to='/'>
        {links.home}
      </NavLink>
      <NavLink activeClassName={activeClassName} to='/work'>
        {links.work}
      </NavLink>
      <NavLink activeClassName={activeClassName} to='/about'>
        {links.about}
      </NavLink>
      <NavLink activeClassName={activeClassName} to='/contact'>
        {links.contact}
      </NavLink>
    </StyledNavigationWrapper>
  )
}
