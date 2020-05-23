import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { StyledAppWrapper } from './containers/styled-app-wrapper'
import { GlobalFooter } from './global-footer/global-footer'
import { GlobalHeader } from './global-header/global-header'
import { GlobalNavigation } from './global-navigation/global-navigation'
import { SplashSection } from './landing-page/splash-section'

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledAppWrapper>
          <GlobalHeader />
          <GlobalNavigation />
          <Switch>
            <Route path='/contact'>
              <div> Contact Me </div>
            </Route>
            <Route path='/about'>
              <div> About Me </div>
            </Route>
            <Route path='/work'>
              <div> My Work </div>
            </Route>
            <Route path='/'>
              <SplashSection />
            </Route>
          </Switch>
          <GlobalFooter />
        </StyledAppWrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(module)(App)
