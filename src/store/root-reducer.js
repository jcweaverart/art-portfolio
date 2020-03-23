import { combineReducers } from 'redux'
import baseReducer from './reducers/base-reducer'
import navigationReducer from './reducers/navigation-reducer'
export const rootReducer = combineReducers({
  baseReducer,
  navigationReducer
})
