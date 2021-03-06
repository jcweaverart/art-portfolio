import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

export const store = createStore(rootReducer, {
  baseReducer: {
    title: 'JCWEAVERART.',
    bodyText: 'This is the splash section content',
  },
  navigationReducer: {
    links: {
      home: 'Home',
      contact: 'Contact me',
      about: 'About me',
      work: 'My work',
    },
  },
})
