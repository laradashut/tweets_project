import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { VisibilityFilters } from '../actions/actionCreators'

import {
  SELECT_BRAND,
  REQUEST_TWEETS,
  RECEIVE_TWEETS
} from '../actions/actionCreators'

export const reducerForTweets = (state = {
  data: [],
  fetching: false
}, action) => {
  switch (action.type) {
    case REQUEST_TWEETS:
      return {...state, fetching: true}

    case RECEIVE_TWEETS:
      return {
        ...state,
        fetching: false,
        data: action.tweets,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export const selectedBrand = (state = 'United', action) => {
  switch (action.type) {
    case SELECT_BRAND:
      return action.brand
    default:
      return state
  }
}
//
// const initialState = {
//   VisibilityFilter: VisibilityFilters.SHOW_UNITED,
//   tweets: []
// }

const rootReducer = combineReducers({
  reducerForTweets,
  selectedBrand,
  routing: routerReducer })

export default rootReducer
