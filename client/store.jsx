import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// import promise from 'redux-promise-middleware'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux' // connect router with redux
import rootReducer from './reducers'
// import { fetchTweets, selectBrand } from './actions/actionCreators'

const browserHistory = createBrowserHistory()
const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export const history = syncHistoryWithStore(browserHistory, store)

export default store

// store has 3 functions
// state
// getState()
// dispatch
