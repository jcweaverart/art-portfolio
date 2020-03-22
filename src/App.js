import React from 'react'
import { hot } from 'react-hot-loader'

import { StyledAppWrapper } from './containers/styled-app-wrapper'
import { GlobalFooter } from './global-footer/global-footer'
import { GlobalNavigation } from './global-navigation/global-navigation'
import { SplashSection } from './landing-page/splash-section'
class App extends React.Component {
  render() {
    return (
      <StyledAppWrapper>
        <GlobalNavigation />
        <SplashSection />
        <GlobalFooter />
      </StyledAppWrapper>
    )
  }
}

export default hot(module)(App)
