import React from 'react'
import { useSelector } from 'react-redux'
import { css } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { StyledNavigationWrapper } from '../containers/styled-navigation-wrapper'

const GlobalNavLink = (props) => {
  return <NavLink to={props.path}>{props.children}</NavLink>
}

export const GlobalNavigation = () => {
  const links = useSelector((state) => state.navigationReducer.links)

  return (
    <StyledNavigationWrapper>
      <GlobalNavLink children={links.home} path='/' />
      <GlobalNavLink children={links.work} path='/work' />
      <GlobalNavLink children={links.about} path='/about' />
      <GlobalNavLink children={links.contact} path='/contact' />
    </StyledNavigationWrapper>
  )
}
