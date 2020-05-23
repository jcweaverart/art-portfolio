import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { StyledAppWrapper } from './containers/styled-app-wrapper'
import { GlobalFooter } from './global-footer/global-footer'
import { GlobalHeader } from './global-header/global-header'
import { GlobalNavigation } from './global-navigation/global-navigation'
import { HomePage } from './pages/home-page'
import { AboutMePage } from './pages/about-me-page'
import { ContactMePage } from './pages/contact-me-page'
import { MyWorkPage } from './pages/my-work-page'

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledAppWrapper>
          <GlobalHeader />
          <GlobalNavigation />
          <Switch>
            <Route path='/contact'>
              <ContactMePage />
            </Route>
            <Route path='/about'>
              <AboutMePage />
            </Route>
            <Route path='/work'>
              <MyWorkPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
          <GlobalFooter />
        </StyledAppWrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default hot(module)(App)
